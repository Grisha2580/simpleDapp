


function getOracleContract() {
	console.log('This is the version ' + web3.version.api)
	var weatherOracleContract =  web3.eth.contract(weatherOracleABI).at(weatherOracleAddress)





	console.log('Went here')

	console.log("These are options " + weatherOracleContract.options)


    return weatherOracleContract
}
