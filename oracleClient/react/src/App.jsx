import React from 'react';
import './App.css';
import ShowSweaters from './ShowSweaters'
import MakeVote from './MakeVote'
import { Container, Row, Col } from 'react-grid-system';




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
   if (this.state.loading) return "Loading the application, please wait...";



   return (


     <Container style = {{border: '12px solid #535b57',
         borderRadius: '10px',
         marginTop: '20px',
         marginBottom: '100px'}} >
       <h1 >
          Vote for the your favorite sweater color</h1>

       <div> <ShowSweaters
              drizzle={this.props.drizzle}
              drizzleState={this.state.drizzleState}/>

            <MakeVote
              drizzle = {this.props.drizzle}
              drizzleState= {this.state.drizzleState}/>
        </div>

      </Container>
 )}

}


export default App;
