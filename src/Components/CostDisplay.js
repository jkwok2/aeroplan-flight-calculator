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
    

      handleChange = event => {
        const value = event.target.value;
        this.setState({
          input: calc.totalPrice()
        });
      };
    

      render() {
        return (
          <React.Fragment>
            { /* handleChange() is called*/ }
            <form onSubmit={this.handleChange}>
            </form>
            { /* Render output */}
            <p>Total cost: {this.state.input}</p>
          </React.Fragment>
        );
      }
    }

export default CostDisplay;
