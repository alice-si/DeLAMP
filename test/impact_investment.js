var ImpactInvestment = artifacts.require("ImpactInvestment");
var CommissionerFunding = artifacts.require("CommissionerFunding");
var OpenFunding = artifacts.require("OpenFunding");
var ClauseRegistry = artifacts.require("ClauseRegistry");
var DisputeManager = artifacts.require("DisputeManager");
var UpdateManager = artifacts.require("UpdateManager");

require("./test-setup");

contract('Impact Investment', function([owner, author, arbiter, funder]) {
  var funding;
  var legalContract;
  var registry;
  var dm;

  before("deploy", async function() {
    registry = await ClauseRegistry.new();
    funding = await OpenFunding.new();
    legalContract = await ImpactInvestment.new(registry.address, funding.address, arbiter, ['MAX_DONATION'], [20]);
    await registry.registerClause(funding.address, author, 100, 25);
    let dmAddress = await legalContract.disputeManager();
    dm = await DisputeManager.at(dmAddress);
  });


  it("should set parameter", async function() {
    await legalContract.setValue('MAX_DONATION', 20);
    let check = await legalContract.getValue('MAX_DONATION');
    console.log('MAX DONATION: ' + check);
  });


  // it("should set role", async function() {
  //   await legalContract.setRole('ARBITER', arbiter);
  //   let check = await legalContract.getRole('ARBITER');
  //   console.log('Arbiter: ' + check);
  // });


  it("should delegate funding", async function() {
    var result, regBalance, aBalance, funded;
    result = await registry.getStats(funding.address);
    regBalance = await web3.eth.getBalance(registry.address);
    aBalance = await web3.eth.getBalance(author);
    funded = await legalContract.funded();
    console.log("Success: " + result.success + " failures: " + result.failure + " Registry Balance: " + regBalance  + " Author balance: " + aBalance + " Funding: " + funded);

    await legalContract.fund(10, {value: 125});
    result = await registry.getStats(funding.address);
    regBalance = await web3.eth.getBalance(registry.address);
    aBalance = await web3.eth.getBalance(author);
    funded = await legalContract.funded();
    console.log("Success: " + result.success + " failures: " + result.failure + " Registry Balance: " + regBalance  + " Author balance: " + aBalance + " Funding: " + funded);

    await legalContract.fund(100, {value: 125});
    result = await registry.getStats(funding.address);
    regBalance = await web3.eth.getBalance(registry.address);
    aBalance = await web3.eth.getBalance(author);
    funded = await legalContract.funded();
    console.log("Success: " + result.success + " failures: " + result.failure + " Registry Balance: " + regBalance  + " Author balance: " + aBalance + " Funding: " + funded);

  });

  it("should update parameter", async function() {
    // let uma = await legalContract.updateManager();
    // let um = await UpdateManager.at(uma);
    // console.log(um);
    await legalContract.addProposal('MAX_DONATION', 100);
    await legalContract.update(0, {from: arbiter});

    let check = await legalContract.getValue('MAX_DONATION');
    console.log('MAX DONATION: ' + check);
  });

  // it("should appeal", async function() {
  //   var result, regBalance, aBalance;
  //
  //   let count = await dm.getDisputesCount();
  //   console.log("Disputes: " + count);
  //
  //   await legalContract.appeal(0, {from: arbiter});
  //   result = await registry.getStats(funding.address);
  //   regBalance = await web3.eth.getBalance(registry.address);
  //   aBalance = await web3.eth.getBalance(author);
  //   console.log("Success: " + result.success + " failures: " + result.failure + " Registry Balance: " + regBalance  + " Author balance: " + aBalance);
  //
  //   await legalContract.appeal(0, {from: arbiter});
  //   result = await registry.getStats(funding.address);
  //   regBalance = await web3.eth.getBalance(registry.address);
  //   aBalance = await web3.eth.getBalance(author);
  //   console.log("Success: " + result.success + " failures: " + result.failure + " Registry Balance: " + regBalance  + " Author balance: " + aBalance);
  //
  // });


});
