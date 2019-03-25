const WeatherOracle = artifacts.require("WeatherOracle")

module.exports = function(deployer) {
  deployer.deploy(WeatherOracle, address);
};
