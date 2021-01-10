import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

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
                <option value="lime">Economy</option>
                <option value="coconut">Business</option>
                <option value="mango">First</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

export default ClassDropdown;
