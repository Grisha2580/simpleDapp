import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadWeather from './ReadWeather'
import UpdateWeather from './UpdateWeather'






// class Greetings extends Component {
//   render() {
//     return (
//       <div>Hey you! {this.props.firstName} {this.props.lastName}!</div>
//     );
//   }
// }


// const App = () => (
//   <div>
//     <WeatherOracleForm firstName="John"/>
//   </div>
// )
//
//


class App extends React.Component {

state = { loading: true, drizzleState: null };

 componentDidMount() {
   const { drizzle } = this.props;

   // subscribe to changes in the store
   this.unsubscribe = drizzle.store.subscribe(() => {

     // every time the store updates, grab the state from drizzle
     const drizzleState = drizzle.store.getState();

     // check to see if it's ready, if so, update local component state
     if (drizzleState.drizzleStatus.initialized) {
       this.setState({ loading: false, drizzleState })
     }
   });
 }

 componentWillUnmount() {
   this.unsubscribe()
 }

 render() {
   if (this.state.loading) return "Loading Drizzle...";

   return (
   <div> <ReadWeather
            drizzle={this.props.drizzle}
            drizzleState={this.state.drizzleState}/>

         <UpdateWeather
            drizzle = {this.props.drizzle}
            drizzleState= {this.state.drizzleState}/>
   </div>
 )}

}


export default App;
