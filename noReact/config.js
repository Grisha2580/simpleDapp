





var Web3 = require('web3')
var web3


if (typeof web3 !== 'undefined') {
	consloe.log('showSomethign')
         web3 = new Web3(web3.currentProvider);
    } else {
         // set the provider you want from Web3.providers
         web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

         testing = "new good"
         console.log('Got here')
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];













const weatherOracleAddress = '0x96ce58ae333661cba10dba5584968d1b28525814'
const weatherOracleABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "getTemperature",
		"outputs": [
			{
				"name": "temp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "oracleAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_temperature",
				"type": "uint256"
			}
		],
		"name": "updateWeather",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_oracleAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "temperature",
				"type": "uint256"
			}
		],
		"name": "WeatherUpdate",
		"type": "event"
	}
]
