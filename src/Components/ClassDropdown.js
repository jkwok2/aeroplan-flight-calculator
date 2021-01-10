import React, {Component} from 'react'
import Calculator from './Calculator'

class ClassDropdown extends Component {
  
    constructor(props) {
        super(props);
      
      }
   
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Flight Class  
              <select>          
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }


export default ClassDropdown;
