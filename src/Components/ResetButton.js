import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class ResetButton extends Component {
  

    render(){
        return (  // every component needs a render
            // HTML version:
        //     <form onSubmit={this.handleSubmit}>
        //     <input type="submit" value="Reset Values" />
        //   </form>

        // React version
        <Button variant="contained" color="primary">
                Reset
            </Button>
        )
    }
}

export default ResetButton;
