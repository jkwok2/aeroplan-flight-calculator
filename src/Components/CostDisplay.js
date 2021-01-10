import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class CostDisplay extends Component {
  
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    render(){
        return (  // every component needs a render
           
            <TextField id="outlined-basic" label="Trip Cost" variant="outlined" />
       
          
        )
    }
}

export default CostDisplay;
