import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReadWeather from './ReadWeather'
import UpdateWeather from './UpdateWeather'
import WeatherOracle from './contracts/WeatherOracle'
import {Drizzle, generateStore} from 'drizzle'







// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [WeatherOracle],
  // web3: {
  //   fallback: {
  //     type: "http",
  //     url: "http://127.0.0.1:8545",
  //   },
  // },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle = {drizzle}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
