import React, {Component} from 'react'
import Form from './Form'
import DisplayData from './displayData'

export default class ParentComponent extends Component{
    state={
        firstName: "",
        lastName: "",
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange =event => {
        this.setState({
            lastName: event.target.value
        })
    }
    render(){
        return(
            <div>
            <Form
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChang={this.handleLastNameChange} 
            />
            <DisplayData formData={this.state}
            </div>
        )
    }
}