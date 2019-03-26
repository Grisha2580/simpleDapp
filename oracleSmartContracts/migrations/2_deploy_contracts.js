const WeatherOracle = artifacts.require("WeatherOracle");
const BettingContract = artifacts.require("Betting");

module.exports = function(deployer) {
  deployer.deploy(WeatherOracle)
  // .then(function() {
  //   return deployer.deploy(BettingContract, WeatherOracle.address)
  // });
};
