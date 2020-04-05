import React, { Component } from 'react'
import Form from './Form'

const initialState = {
    firstName: '',
    lastName: ''
}

class ParentComponent extends Component {
    state = initialState

    handleChange = (event) => {
        let inputName = event.target.name

        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state[inputName]))
    }

    render() {
        return (
            <Form handleChange={this.handleChange} {...this.state}/>
        )
    }
}

export default ParentComponent