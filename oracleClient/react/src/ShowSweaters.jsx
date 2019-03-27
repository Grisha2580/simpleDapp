import React from "react";
// import {Canvas} from 'react-canvas-js'
// import  CanvasJSReact from './canvasjs.react'
import {BarChart, Bar} from 'rechart'
import SimplePieChart from './DataChart'
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// import CanvasJSReact from 'canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ShowSweaters extends React.Component {
  state = { votingResultKeys: {}, colorChoices: ["blue", "green", "red", "brown"] };

  componentDidMount() {
    const { drizzle} = this.props;
    const contract = drizzle.contracts.VoteForSweaterPt3;


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
      const number = (number) => {if (typeof number === 'undefined') {return 0} else {return parseInt(number.value)}}
      votingData[color] = number(oneVote)
    }



    const data =  [{name: 'Blue', value: votingData['blue']}, {name: 'Green', value: votingData['green']},
                      {name: 'Red', value: votingData['red']}, {name: 'Brown', value: votingData['brown']}];

  

    const listItems = colorChoices.map((color, key) => {return <li>{color} was voted by {votingData[color]}}</li>});

      return (
  		<div>
  			<SimplePieChart data = {data} />
  			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  		</div>
  		);

  }
}


export default ShowSweaters;
