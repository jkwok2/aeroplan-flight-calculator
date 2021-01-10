import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';


class CostDisplay extends Component {
  
    // constructor (props) {
        // super();
        // this.state = {
        //   data : this.props.dataParentToChild
        // }
        // instantiate Calculator:
        // var calc = new Calculator();
      
      render(){
        return (

          <TextField id="outlined-basic" label="Trip Cost" variant="outlined" />

        //  const {data} = this.state;

        //   <div>
        //     {data}
        //   </div>

          // Code from tutorial on outputting text from a textfield
          // <React.Fragment>
          //   { /* handleChange() is called*/ }
          //   <form onSubmit={this.handleChange}>
          //   </form>
          //   { /* Render output */}
          //   <p>Total cost: {this.state.input}</p>
          // </React.Fragment>
        );
      }
    }

export default CostDisplay;


     // Code from tutorial on outputting text from a textfield
        // this.publish = this.publish.bind(this);
        // this.handleChange = this.handleChange.bind(this);
      // }
    
      // Code from tutorial on outputting text from a textfield
      // handleChange = event => {
      //   const value = event.target.value;
      //   this.setState({
      //     input: calc.totalPrice()
      //   });
      // };