import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={event => this.handleSubmit(event)}>
  //         <input 
  //           type="text" 
  //           name="firstName" 
  //           onChange={event => this.handleFirstNameChange(event)} 
  //           value={this.state.firstName} 
  //         />
  //         <input 
  //           type="text" 
  //           name="lastName" 
  //           onChange={event => this.handleLastNameChange(event)} 
  //           value={this.state.lastName} 
  //         />
  //         <input type="Submit"/>
  //       </form>
  //       {this.listOfSubmissions()}
  //     </div>
  //   )
  // }


  render() {
    return (
      <div>
        <form>
          <input 
            name="firstName"
            type="text"
            // onChange={event => this.props.handleFirstNameChange(event)}
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input 
            name="lastName"
            type="text"
            // onChange={event => this.props.handleLastNameChange(event)}
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
          {/* <input type="submit"/> */}
        </form>
      </div>
    )
  }
}

export default Form;