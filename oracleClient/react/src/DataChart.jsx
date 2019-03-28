import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend, Cell} from 'recharts'

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// const data = [
//       {name: 'Blue', votes: 4000},
//       {name: 'Green', votes: 3000},
//       {name: 'Red', votes: 2000},
//       {name: 'Brown', votes: 2780},
//
// ];




// class SimpleBarChart extends React.Component {
// 	render () {
//
//
//   	return (
//       <div>
//     	<PieChart width={600} height={300} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//
//        <Pie data={data} fill="#8884d8"/>
//
//       </PieChart>
//       </div>
//     );
//   }
// }

// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 8, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 18, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];

const data =  [{name: 'Blue', value: 300, color: 'blue'}, {name: 'Green', value: 2},
                  {name: 'Red', value: 150}, {name: 'Brown', value: 400}];


const colors = ['blue', 'green', 'red', 'brown']

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="red" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

const renderCustomAxisTick = ({ x, y, payload }) => {
  let path = '';

  console.log('trying ')

  switch (payload.value) {
    case 'Blue':
      path = './sweaterImages/sweater_blue.png';
      break;
    case 'Green':
      path = './sweaterImages/sweater_green.png';
      break;
    case 'Red':
      path = './sweaterImages/sweater_red.png';
      break
    default:
      path = './sweaterImages/sweater_brown.png';
  }

  return (

    <img src = {require('./sweaterImages/sweater_blue.png')} alt = 'Blue Sweater' width = '24' height = '24'/>
  );
};

class SimpleBarChart extends React.Component {
	render () {

    const data = this.props.data

  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 60, right: 30, left: 20, bottom: 20}}>


       <XAxis dataKey="name" tick = {false} />

       // // <Tooltip/>
       <Bar dataKey="value" minPointSize={5} >
          {data.map((entry, index) => (
            <Cell fill={colors[index]}/>
          ))
        }
        </Bar>

      </BarChart>
    );
  }
}
//
// ReactDOM.render(
//   <SimplePieChart />,
//   document.getElementById('container')
// );

export default SimpleBarChart;
//
// ReactDOM.render(
//   <SimpleBarChart />,
//   document.getElementById('container')
// );
