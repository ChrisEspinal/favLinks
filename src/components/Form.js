import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);   
        /*
            TODO - set initial state for link name and URL 

        */
        this.state = {
            name: '',
            URL: ''
        }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        this.setState({[event.target.name]: event.target.value})

    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

       this.props.handleSubmit(this.state)

       this.setState({
           name: '',
           URL: ''
       })

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="name">Name</label>
                <input type="text" id="name" name= "name" value = {this.state.name} onChange={this.handleChange}></input>
                <label for="URL">URL</label>
                <input type="text" id="URL" name= "URL" value = {this.state.URL} onChange={this.handleChange}></input>
                <input type="submit" value="Submit" onClick = {this.onFormSubmit}></input>
            </form>
        )
    
    }
}

export default Form;
