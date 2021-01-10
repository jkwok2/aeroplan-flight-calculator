import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class ResetButton extends Component {
  

    render(){
        return (  // every component needs a render
            <TextField id="outlined-basic" label="Reset Button" variant="outlined" />
        )
    }
}

export default ResetButton;
