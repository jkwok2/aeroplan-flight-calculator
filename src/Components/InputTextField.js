import React, {Component} from 'react'
import Calculator from './Calculator'


class InputTextField extends React.Component {

        constructor(props) {
          super(props);
          this.state = {value: 'coconut'};
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        // code to signal there is an issue with the input
        handleChange(event) {    this.setState({value: event.target.value});  }
        handleSubmit(event) {
          alert('Sad. Those are valid airports! Please re-enter airports');
          event.preventDefault();
        }
      
        render() {
          return (
           
            <form onSubmit={this.handleSubmit}>
          
           <textarea name="textarea"
            rows="5" cols="30"
            placeholder="Enter airports here in the following format: YVR-FRA-LAX"></textarea>

            <input type="submit" value="Submit" />
          </form>

          );
           
        }
      }

export default InputTextField;
