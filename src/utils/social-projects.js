import {state} from "../state.js";
import Vue from 'vue';

const ethers = require('ethers');
const catalogContract = require('../contracts/ProjectCatalog.json');
const projectContract = require('../contracts/ProjectWithBonds.json');
const demoTokenContract = require('../contracts/DemoToken.json');
const demoWalletContract = require('../contracts/DemoInvestmentWallet.json');
const couponContract = require('../contracts/Coupon.json');

const CATALOG_ADDRESS = "0x3A379D1277C54FB92a718Bb84d0145f7aC707a1F";
const PROJECT_ADDRESS = "0xF4ae14E517Ea5Ae42955fbb1503991d4E0189edC";
const DEMO_TOKEN_ADDRESS = "0x0d694e6d4310b10830abe7d5CFfde8b4Bf267B40";
var provider, signer, walletAddress;

const injectedWeb3 = window.web3;
if (typeof injectedWeb3 !== "undefined") {
  provider = new ethers.providers.Web3Provider(injectedWeb3.currentProvider);
  console.log(provider);
  signer = provider.getSigner();
} else {
  console.log("No web3 provider available");
}

export const projects = {
  deployCatalog: async function() {
    let factory = new ethers.ContractFactory(catalogContract.abi, catalogContract.bytecode, signer);
    let contract = await factory.deploy();
    console.log(contract.address);
  },
  deployProject: async function() {
    let factory = new ethers.ContractFactory(projectContract.abi, projectContract.bytecode, signer);

    //constructor(string memory _name, uint8 _upfrontPaymentPercentage, uint256 _couponNominalPrice, uint256 _couponInterestRate) public
    let contract = await factory.deploy('UNEMPLOYMENT', 0, 1, 15);
    console.log(contract.address);
    await contract.setToken("0x0d694e6d4310b10830abe7d5CFfde8b4Bf267B40");
    await contract.setBeneficiary(contract.address);
    await this.registerProject(contract.address);
  },
  deployDemoToken: async function() {
    let factory = new ethers.ContractFactory(demoTokenContract.abi, demoTokenContract.bytecode, signer);
    let contract = await factory.deploy();
    console.log(contract.address);
  },
  deployDemoWallet: async function() {
    let factory = new ethers.ContractFactory(demoWalletContract.abi, demoWalletContract.bytecode, signer);
    let contract = await factory.deploy(CATALOG_ADDRESS);
    console.log("Created wallet: " + contract.address);
    this.fetchWallet();
  },
  deposit: async function(amount) {
    console.log("DEPOSITING " + amount + " tokens to wallet: " + walletAddress);
    let walletContract = new ethers.Contract(walletAddress, demoWalletContract.abi, signer);
    await walletContract.requestTokens(DEMO_TOKEN_ADDRESS, amount);
    this.updateBalance();
  },
  invest: async function(project, amount) {
    console.log("Investing into project: " + project);
    let walletContract = new ethers.Contract(walletAddress, demoWalletContract.abi, signer);
    await walletContract.invest(amount, "UNEMPLOYMENT");
    await projects.fetchProjects();
    await this.updateBalance();
  },
  updateBalance: async function() {
    console.log("Checking balance for: " + walletAddress);
    let tokenContract = new ethers.Contract(DEMO_TOKEN_ADDRESS, demoTokenContract.abi, signer);
    let balance = await tokenContract.balanceOf(walletAddress);
    state.balance.value = balance.valueOf();
  },
  registerProject: async function(address) {
    let projectInstance = new ethers.Contract(address, projectContract.abi, signer);
    let name = await projectInstance.name();
    console.log("Registering project: " + name);

    let contract = new ethers.Contract(CATALOG_ADDRESS, catalogContract.abi, signer);
    await contract.addProject(name, PROJECT_ADDRESS);
    let added = await contract.getProjectAddress(name);
    console.log("Project added: " + added);
  },
  fetchProjects: async function() {
    console.log("Fetching projects");
    state.projects.length = 0;
    let eventAbi = [catalogContract.abi[4]];
    let iface = new ethers.utils.Interface(eventAbi);

    let filter = {
      address: CATALOG_ADDRESS,
      fromBlock: 0
    };

    provider.getLogs(filter).then((results) => {
      console.log("RESULTS FROM FILTER");
      console.log(results);

      results.forEach(async (result) => {
        let event = iface.parseLog(result);
        let address = event.values[1];
        let contract = new ethers.Contract(address, projectContract.abi, signer);
        let code = await contract.name();
        let interests = await contract.couponInterestRate();

        //Fetch coupon holdings
        let couponAddress = await contract.getCoupon();
        let coupon = new ethers.Contract(couponAddress, couponContract.abi, signer);
        let holdings = await coupon.balanceOf(walletAddress);

        let project = {
          code: code,
          desc: state.projectDesc[code],
          contract: contract,
          interests: interests + '%',
          holdings: holdings.valueOf()
        };
        state.projects.push(project);
      });
    });
  },
  fetchWallet: async function() {
    let address = await signer.getAddress();

    let filter = {
      fromBlock: 0,
      topics: [
        "0x234cf33b32239d80b54161e2396c80cdeaf4d34161300e54d8bc01eb7c0ea553",
        "0x000000000000000000000000" + address.substr(2)
      ]
    };

    provider.getLogs(filter).then((results) => {
      if (results.length > 0) {
        walletAddress = results[0].address;
        state.wallet.active = true;
        this.updateBalance();
        this.fetchProjects();
      }
    });
  }
};

projects.fetchWallet();


