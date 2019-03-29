import React from "react";
import './style.css'

class MakeVote extends React.Component {
  state = { stackId: null, alreadyVotedKey: null };

  componentDidMount() {
    const {drizzle, drizzleState } = this.props

    const contract = drizzle.contracts.VoteForSweaterPt3

    const address = drizzleState.accounts[0]

    console.log(address)

    // This one receives key to the storage, where the fetched value will be stored
    const alreadyVotedKey = contract.methods['checkAlreadyVoted'].cacheCall(address)
    console.log(alreadyVotedKey)
    this.setState({alreadyVotedKey})

    //This one receives the actual value from the storage
    const voted = drizzleState.contracts.VoteForSweaterPt3.checkAlreadyVoted[alreadyVotedKey]
    console.log(voted)


  }


  buttonDisabled ()  {
    const {drizzleState} = this.props
    const contract = drizzleState.contracts.VoteForSweaterPt3
    console.log(contract)

    const didVote = contract.checkAlreadyVoted[this.props.alreadyVotedKey]
    console.log(didVote)
    return didVote
  }

  handleKeyDown = e => {
    // if the enter key is pressed, set the value with the string
    if (e.keyCode === 13) {
      this.setValue(e.target.value);
    }
  };

  handleClick = e => {
    const { drizzle, drizzleState } = this.props;

    const contract = drizzle.contracts.VoteForSweaterPt3;
    const value = e.target.value;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["sweaterVote"].cacheSend(value, {

      from: drizzleState.accounts[0]
    });

    // save the `stackId` for later reference
    this.setState({ stackId });
  }

  setValue = value => {

  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    


      if (!this.buttonDisabled()) {

        return (
      <div>
        <button id='btnBlue'  onClick = {this.handleClick} className = "btn btn--stripe" type ="button" value = "blue">Blue</button>
        <button id='btnGreen' onClick = {this.handleClick} className = "btn btn--stripe" type ="button" value = "green">Green</button>
        <button id='btnRed'  onClick={this.handleClick} className = "btn btn--stripe" type ="button" value = "red">Red</button>
        <button id='btnBrown' onClick={this.handleClick} className = "btn btn--stripe" type ="button" value = "brown">Brown</button>
          <div>{this.getTxStatus()}</div>
      </div>)
    } else {
      return (
      <div>
         <h2> Thank you for voting!
         </h2>
      </div>)
    }
  }
}

export default MakeVote;
