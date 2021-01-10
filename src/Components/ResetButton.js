import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class ResetButton extends Component {
  

    render(){
        return (  // every component needs a render
            <form onSubmit={this.handleSubmit}>
        
            <input type="submit" value="Reset Values" />
          </form>
        )
    }
}

export default ResetButton;
