



// import getOracleContract from 'ethereum.js'

var contract = getOracleContract()

console.log('This is the contract ' + contract)
console.log('This is the web3 ' + web3)


function updateWeather(temperature) {
	contract.updateWeather(temperature)
}





function changeParagraph() {
      var temperature = document.getElementById("temperature").value;
      console.log('This is the temperature ' + temperature)
      updateWeather(temperature)
			weather = contract.getWeather()

			console.log('This is the weather {weather}')




}
