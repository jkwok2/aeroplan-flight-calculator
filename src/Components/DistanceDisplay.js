import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Calculator from './Calculator'

class DistanceDisplay extends Component {
  

    render(){
        return (  
            //placeholder - not necessary
            <TextField id="outlined-basic" label="Distance to location" variant="outlined" />

        )
    }
}

export default DistanceDisplay;
