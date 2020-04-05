import React from 'react';

class Form extends React.Component {
  handleSubmitForm = event => {
    event.preventDefault()
    console.log(this.props.firstName, this.props.lastName)
  }

  render() {
    let {firstName, lastName} = this.props
    
    return (
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={lastName} />
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

export default Form;