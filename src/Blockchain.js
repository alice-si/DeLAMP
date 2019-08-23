import HG from 'gnosis-hg-js';
import Web3 from 'web3';
const ethers = require('ethers');

// Link gnosis conditional-contracts module to App

const MANAGER_CONTRACT_ADDRESS = "0x2b27168e83cAb0Ee27CCF66c970587B92ee844C4";

window.ethereum.enable();


let Blockchain = {
  getHGContract() {
      // Check for injected web3 (mist/metamask)
      var web3js = Web3;
      if (typeof web3js !== "undefined") {
        return new HG(MANAGER_CONTRACT_ADDRESS);
      }
  }
}

export default Blockchain;
