import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Calculator from './Calculator'

class CostDisplay extends Component {
  
    // constructor (inputString, cos) {
    //     this.inputString = inputString
    //     this.cos = cos
    //     this.cityArr = []
    //     this.distances = []
    //     this.originZone;
    //     this.destZone;
    // }

    var calc = new Calculator();

    render(){
        return (  // every component needs a render
           
            //<TextField id="outlined-basic" label="Trip Cost" variant="outlined" />
       
            <TextField
            id="outlined-basic"
            label="Trip Cost"
    
            }}
            onChange={(e) => setValue(calc.totalPrice(zone, band, cos))}
          />
          
        )
    }
}

export default CostDisplay;
