import React, {Component} from 'react'
import calculator from "../Calculator"

class InputTextField extends React.Component {

        constructor(props) {
          super(props);
          this.state = {value: 'YVR-YYZ-LHR'};
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        // code to signal there is an issue with the input
        handleChange(event) {    this.setState({value: event.target.value});  }
        handleSubmit(event) {
          const value = calculator(this.state.value)
          this.state = value
          console.log(this.state)
          alert('Sad. Those are valid airports! Please re-enter airports');
          event.preventDefault();
        }
      
        render() {
          
          return (
            
            <form onSubmit={this.handleSubmit}>
          
           <textarea name="textarea"
            rows="5" cols="30"
            value={this.state.value} onChange={this.handleChange}
            placeholder="Enter airports here in the following format: YVR-FRA-LAX"></textarea>

            <input type="submit" value={"submit"}/>
          </form>

          );
           
        }
      }

export default InputTextField;
