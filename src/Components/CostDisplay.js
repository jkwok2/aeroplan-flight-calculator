import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Calculator from './Calculator'

class CostDisplay extends Component {
  
    constructor () {
        super();
        var calc = new Calculator();
        
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
      }
    
      publish() {
        console.log( this.state.topicBox, this.state.payloadBox );
      }

    

    render(){
        return (  // every component needs a render
           
            <TextField id="outlined-basic" label="Trip Cost" variant="outlined" />
       
        //     <TextField
        //     id="outlined-basic"
        //     label="Trip Cost"
    
        //     }}
        //     onChange={(e) => setValue(calc.totalPrice(zone, band, cos))}
        //   />
          
        )
    }
}

export default CostDisplay;
