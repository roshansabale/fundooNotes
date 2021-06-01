import React, { Component } from "react";
import { Card, TextField, Button} from "@material-ui/core";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      email:"",
      emailError:"",
      password:"",
      passwordError:""
    };
  }

  handleFirstName = (event) => {
    console.log("Before set state", event.target.value);
    //console.log(event)
    let fname = event.target.value;
    if (event.target.value.match(/^[A-Z]{1}[a-zA-Z\\s]{2,}$/)) {
      // console.log("FirstName valid!!");
      this.setState({
        firstName: fname,
        firstNameError: "",
      });
    } else {
      //console.log("Firstname Not valid!!");
      this.setState({
        firstName: fname,
        firstNameError: "First Name Not Valid",
      });
    }
  };

  handleLastName = (event) => {
    let lname = event.target.value;
    if (event.target.value.match(/^[A-Z]{1}[a-zA-Z\\s]{2,}$/)) {
      // console.log("FirstName valid!!");
      this.setState({
        lastName: lname,
        lastNameError: "",
      });
    } else {
      //console.log("Firstname Not valid!!");
      this.setState({
        lastName: lname,
        lastNameError: "Last Name Not Valid",
      });
    }
  };
  handleEmail = (event) => {
    let mailID = event.target.value;
    if (event.target.value.match(/^[A-Z]{1}[a-zA-Z\\s]{2,}$/)) {
      // console.log("FirstName valid!!");
      this.setState({
        email: mailID,
        emailError: "",
      });
    } else {
      //console.log("Firstname Not valid!!");
      this.setState({
        email: mailID,
        emailError: "Email is not valid",
      });
    }
  };

  handleEmail = (event) => {
    let mailID = event.target.value;
    if (event.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      // console.log("FirstName valid!!");
      this.setState({
        email: mailID,
        emailError: "",
      });
    } else {
      //console.log("Firstname Not valid!!");
      this.setState({
        email: mailID,
        emailError: "Email is not valid",
      });
    }
  };
handlePassword = (event) => {
  let pwd = event.target.value;
  if (event.target.value.match(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
    // 7 to 15 characters which contain at least one numeric digit and a special character
    this.setState({
      password: pwd,
      passwordError: "",
    });
  } else {
    //console.log("Firstname Not valid!!");
    this.setState({
      password: pwd,
      passwordError: "Password not matching criteria ",
    });
  }
};

  render() {
    return (
      <div className="signUp-container">
        <Card id="card-container">
         <div className="title-div">
         <h1>SignUp </h1>
         </div>
        
         <div id="names-div">
          <TextField
            id="firstname"
            className="input-name"
            label="FirstName"
            variant="outlined"
            placeholder="Enter First Name"
            onChange={this.handleFirstName}
            error={!!this.state.firstNameError}
            helperText={this.state.firstNameError}
            value={this.state.firstName}
          />
          <TextField
            id="lastname"
            className="input-name"
            label="LastName"
            variant="outlined"
            placeholder="Enter Last Name"
            onChange={this.handleLastName}
            error={!!this.state.lastNameError}
            helperText={this.state.lastNameError}
            value={this.state.lastName}
          /></div>
          
          <div className="row-content">
          <TextField
            id="email"
            label="Email"
            className="row-content"
            variant="outlined"
            placeholder="Enter EmailID"
            onChange={this.handleEmail}
            error={!!this.state.emailError}
            helperText={this.state.emailError}
            value={this.state.email}
          /></div>
          <div className="password-div">
           <TextField
            id="password"
            type="password"
            className="row-content"
            label="Password"
            variant="outlined"
            placeholder="Enter Password"
            onChange={this.handlePassword}
            error={!!this.state.passwordError}
            helperText={this.state.passwordError}
            value={this.state.password}
          />
           </div>
           <div className="password-div">
          <TextField
            id="confirmPassword"
            type="password"
            className="row-content"
            label="Confirm Password"
            variant="outlined"
            placeholder="Enter Confirm Password"
            onChange={this.handleConfirmPassword}
            error={!!this.state.passwordError}
            helperText={this.state.passwordError}
            value={this.state.confirmPassword}
          />
         </div>
         <div className="link-div">
           <h4>If you have account already <a href="/Login">Sign In</a> here.</h4>
         </div>
         <div className="btn">
          <Button variant="contained" color="secondary">
            Register
          </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default SignUp;
