import React, { Component } from "react";
import { Card, TextField, Button,Snackbar,IconButton} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { login } from "../services/userService";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      snackBarOpen:false,
      snackbarMSG:""
    };
  }

  snackbarClose = (event) => {
    this.setState({snackBarOpen:false})
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
  handleLogin = async () => {
    if(this.state.email !== null && this.state.password !== null ){
      let loginObject = {
        email: this.state.email,
        password: this.state.password
      }
      await login(loginObject).then((response) => {
        this.setState({
          snackBarOpen: true,
          snackbarMSG: "Login Succefully !!",
        });
        this.props.history.push("/dashboard");
      }).catch((error) => {
        this.setState({
          snackBarOpen: true,
          snackbarMSG: "Please check Username and Password"
        });
      })
    }
    else{
      this.setState({
        snackBarOpen:true,
        
        emailError: "Email required",
        passwordError: "Password required",
        snackbarMSG:" Unable to login check Username and Password!!",
      })
    }
  };



  render() {
    return (
      <div className="signUp-container">
      <Card id="login-container">
       <div className="title-div">
       <h1>Login </h1>
       </div>   
        <div className="row-content">
        <TextField
          id="email"
          label="Email"
          className="row-content"
          variant="outlined"
          placeholder="Enter Email"
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
         <div className="link-div">
           <span>If you not have account already </span> 
           <Link to="/SignUp"> Sign up</Link><br></br>
           <span><Link to="/fpassword"> ForgetPassword </Link></span>
         </div>
       <div className="btn">
        <Button onClick={() => this.handleLogin()} variant="contained" color="secondary">
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

export default Login;
