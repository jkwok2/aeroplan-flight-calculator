import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class DistanceDisplay extends Component {
  

    render(){
        return (  // every component needs a render
            <TextField id="outlined-basic" label="Distance to location" variant="outlined" />
        )
    }
}

export default DistanceDisplay;
