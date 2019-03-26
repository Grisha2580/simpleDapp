import React from "react";

class ReadWeather extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.WeatherOracle;



    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["getTemperature"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { WeatherOracle } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const myString = WeatherOracle.getTemperature[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My stored string: {myString && myString.value}</p>;
  }
}

export default ReadWeather;
