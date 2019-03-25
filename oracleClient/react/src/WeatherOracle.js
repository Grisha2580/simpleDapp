
import React from 'react'
import style from './style'
import TextField from './TextField'




// const Greetings = ({ firstName, lastName }) => <div>Hey you! {firstName} {lastName}!</div>;

const MakeForm = ({firstName}) => <div>Your name is {firstName}</div>

class WeatherOracleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;
    console.log('here')


    const firstNameError = this.validateName( firstName );

    return this.setState({ firstNameError });
  };

  onFirstNameChange = event =>

    this.setState({

      firstName: event.target.value
    })
    
    ;

  render() {
    const { firstNameError, firstName } = this.state;

    return (

      <div style={style.form}>


      <TextField name="firstName"
                 label="First name:"
                 onChange={this.onFirstNameChange}
                 onBlur={this.onFirstNameBlur}
                 error={firstNameError} />



        <MakeForm firstName={firstName} />
      </div>
    );
  }
}
export default WeatherOracleForm;
