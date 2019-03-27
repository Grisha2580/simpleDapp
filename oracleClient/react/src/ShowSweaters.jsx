import React from "react";
import {Canvas} from 'react-canvas-js'
import  CanvasJSReact from './canvasjs.react'
import {BarChart, Bar} from 'recharts'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// import CanvasJSReact from 'canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ShowSweaters extends React.Component {
  state = { votingResultKeys: {}, colorChoices: ["blue", "green", "red", "brown"] };

  componentDidMount() {
    console.log("I did nothing")
    const { drizzle} = this.props;
    const contract = drizzle.contracts.VoteForSweaterPt3;
    //
    // console.log('These are the methods ' + contract.methods)
    // const colorChoicesKey = contract.methods["colorChoises"].cacheCall()
    //
    // this.setState({colorChoicesKey})
    //
    // const colorChoices = contract.colorChoices(this.state.colorChoicesKey)
    // console.log('These are while mounting' + colorChoices)
    //
    var votingResultKeys = {}

    for (let i = 0; i < this.state.colorChoices.length; i++) {
      let color = this.state.colorChoices[i]
      let votingResultKey = contract.methods["getVotes"].cacheCall(color)
      votingResultKeys[color] = votingResultKey
    }
    // save the `dataKey` to local component state for later reference
    this.setState({ votingResultKeys });
  }

  render() {


    // get the contract state from drizzleState
    const { VoteForSweaterPt3 } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const colorChoices = this.state.colorChoices

    var votingData = {}

    for (let i = 0; i < colorChoices.length; i++) {
      let color = colorChoices[i]
      let colorResultKey = this.state.votingResultKeys[color]
      let oneVote = VoteForSweaterPt3.getVotes[colorResultKey]
      const number = (number) => {if (typeof number === 'undefined') {return 0} else {return number.value}}
      votingData[color] = number(oneVote)
    }




    const options = {
      // colorSet: ['blue', 'green', 'red', 'brown'],
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "Blue",  y: (votingData['blue'] + 1) * 6 , x:10},
                    { label: "Green", y: (votingData['green']  + 1) * 6, x: 20},
                    { label: "Red", y: (votingData['red'] + 1) * 6, x:30},
                    { label: "Brown",  y: (votingData['brown']  + 1) * 6, x:40},
                ]
       }]
   }


    const listItems = colorChoices.map((color, key) => {return <li>{color} was voted by {votingData[color]}}</li>});

      return (
  		<div>
  			<BarChart options = {options}
  				/* onRef={ref => this.chart = ref} */
  			/>
  			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  		</div>
  		);

    // return <ul>{listItems}</ul>
    // return (
    //   <ul>
    //     {colorChoices.map((item, index) => {
    //       return <li>Amount voted for {item} sweater: {votingData[item]}</li>;
    //     })}
    //   </ul>
    // );
  }
}


export default ShowSweaters;

// import React from 'react'
// import style from './style'
// import TextField from './TextField'
//
//
//
//
// // const Greetings = ({ firstName, lastName }) => <div>Hey you! {firstName} {lastName}!</div>;
//
// const MakeForm = ({firstName}) => <div>Your name is {firstName}</div>
//
// class WeatherOracleForm extends React.Component {
//   state = {
//     firstName: "",
//     firstNameError: "",
//   };
//
//   validateName = name => {
//     const regex = /[A-Za-z]{3,}/;
//
//     return !regex.test(name)
//       ? "The name must contain at least three letters. Numbers and special characters are not allowed."
//       : "";
//   };
//
//   onFirstNameBlur = () => {
//     const { firstName } = this.state;
//     console.log('here')
//
//
//     const firstNameError = this.validateName( firstName );
//
//     return this.setState({ firstNameError });
//   };
//
//   onFirstNameChange = event =>
//
//     this.setState({
//
//       firstName: event.target.value
//     })
//
//     ;
//
//   render() {
//     const { firstNameError, firstName } = this.state;
//
//     return (
//
//       // <div style={style.form}>
//       //
//       //
//       // // <TextField name="firstName"
//       // //            label="First name:"
//       // //            onChange={this.onFirstNameChange}
//       // //            onBlur={this.onFirstNameBlur}
//       // //            error={firstNameError} />
//       //
//       // // <UpdateWeather drizzle={this.props.drizzle} />
//       //
//       //
//       //
//       //   // <MakeForm firstName={firstName} />
//       // </div>
//     );
//
//
//   }
// }
// // export default WeatherOracleForm;
//     </div>);
//   }
// }
