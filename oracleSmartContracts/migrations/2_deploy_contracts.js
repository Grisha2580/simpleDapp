const VoteForSweaterPt3 = artifacts.require("VoteForSweaterPt3");

module.exports = function(deployer) {
  deployer.deploy(VoteForSweaterPt3)
  // .then(function() {
  //   return deployer.deploy(BettingContract, WeatherOracle.address)
  // });
};
