pragma solidity ^0.4.25;

/* import "./Ownable.sol"; */

contract WeatherOracle {
  address public oracleAddress;
  uint temperature;

  constructor() internal {
      address = msg.sender;
      temperature = 10
  }

  event WeatherUpdate (uint temperature);

  function updateWeather (uint _temperature) public onlyOwner {
    require(msg.sender == oracleAddress);
    temperature = _temperature;
    emit WeatherUpdate (temperature);
  }

  function getTemperature() public view returns (uint temp) {
    return temperature;
  }
}
