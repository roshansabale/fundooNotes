import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, TextField, Button,Snackbar,IconButton} from "@material-ui/core";
import { signUp } from "../../services/userService";
import "./signup.scss";

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPasswordError:"",
      snackBarOpen:false,
      snackbarMSG:""
    };
  }

  snackbarClose = (event) => {
    this.setState({snackBarOpen:false})
  };

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
    if (
      event.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
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
    if (
      event.target.value.match(
        /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
      )
    ) {
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

  handleConfirmPassword = (event) => {
    let pwd = event.target.value;
    if (event.target.value.match(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
      // 7 to 15 characters which contain at least one numeric digit and a special character
     if(this.state.password === pwd) {
      this.setState({
        password: pwd,
        confirmpasswordError: "",
      });}
      else {
        this.setState({
        password: pwd,
        confirmpasswordError: "Confirm password not match with original password",
      });
      }
    } else {
      //console.log("Firstname Not valid!!");
      this.setState({
        password: pwd,
        confirmpasswordError: "Password not matching criteria ",
      });
    }
  };

  handleSignup = async () => {
     if (
      
      this.state.firstName !== "" &&
      
      this.state.lastName !== "" &&
      
      this.state.email !== "" &&
    
      this.state.password !== ""
    ) {
      console.log("From if");
      let signupObject = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email: this.state.email,
        service : "advance",
        password : this.state.password,
      }
      await signUp(signupObject).then((response) => {
        console.log(response);
        this.setState({
          snackBarOpen:true,
          snackbarMSG:response.data.data.message,
        })
        this.handleResetForm();
        this.props.history.push("/login");
      }).catch((error) =>{
        console.log("Error"+error)
        this.setState({
          snackBarOpen:true,
          snackbarMSG:error.message,
        })
      });
    }
    else {
      console.log("From else");
      this.setState({
        snackBarOpen:true,
        firstNameError: "First name required",
        lastNameError: "Last name required",
        emailError: "Email required",
        passwordError: "Password required",
        confirmPasswordError:"Password required",
        snackbarMSG:" Sign up failed!!",
      })
    }
  };

  handleResetForm(event){
    this.setState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  
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
              required
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
              required
            />
          </div>

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
              required
            />
          </div>
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
              required
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
              error={!!this.state.confirmPasswordError}
              helperText={this.state.confirmPasswordError}
              value={this.state.confirmPassword}
              required
            />
          </div>
          <div className="link-div">
            <span>If you have account already </span>
            <Link to ="/Login">Sign In</Link>
          </div>
          <div className="btn">
            <Button
              onClick={() => this.handleSignup()}
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
            <Snackbar  anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
            open={this.state.snackBarOpen}
            autoHideDuration={3000}
            onClose={this.snackbarClose}
            message={this.state.snackbarMSG}
            action={[
              <IconButton key="close" arial-label="close" color="inherit" onClick={this.snackbarClose}>x</IconButton>
            ]}>
      </Snackbar>
          </div>
        </Card>
      </div>
    );
  }
}

export default SignUp;
