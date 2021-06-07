import React, { Component } from "react";
import { Card, TextField, Button,Snackbar,IconButton} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { resetPass } from "../../services/userService";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      snackBarOpen:false,
      snackbarMSG:""
    };
  }

  snackbarClose = (event) => {
    this.setState({snackBarOpen:false})
  };

 
  handlePassword = (event) => {
    let pwd = event.target.value;
    if (
      event.target.value.match(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
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
    let confrmPassword = event.target.value;
    console.log(confrmPassword);
    if(this.state.password === confrmPassword)
    {
      this.setState({
        //password: confrmPassword,
        confirmPasswordError: ""
      })
    } else {
      this.setState({
        confirmPassword: confrmPassword,
        confirmPasswordError: "Confirm Password not mactch with original password",
      });
    }
  };

  handleResetPassword = async () => {
    
    if(this.state.password !== null && this.state.confirmPassword !== null ){
      let passwordObject = {
        newPassword : this.state.password
      };
      await resetPass(passwordObject).then((response) => {
        this.setState({
          snackBarOpen: true,
          snackbarMSG: response.message,
        });
        this.props.history.push("/login");
      }).catch((error) => {
        this.setState({
          snackBarOpen: true,
          snackbarMSG: error +"Please check Username and Password"
        });
      })
    }
    else{
      this.setState({
        snackBarOpen:true,
        confirmPasswordError: "Password required",
        passwordError: "Password required",
        snackbarMSG:" Unable to login check Username and Password!!",
      });
    }
  };

  render() {
    const {id} = this.props.match.params;
    localStorage.setItem("id",id);
    console.log("ID:"+id);
    return (
      <div className="signUp-container">
      <Card id="login-container">
       <div className="title-div">
       <h1>Reset Password </h1>
       </div>   
        <div className="row-content">
        <TextField
          id="password"
          label="password"
          className="row-content"
          variant="outlined"
          placeholder="Enter password"
          onChange={this.handlePassword}
          error={!!this.state.passwordError}
          helperText={this.state.passwordError}
          value={this.state.password}
        /></div>
        <div className="row-content">
        <TextField
          id="confirmpassword"
          label="Confirm password"
          className="row-content"
          variant="outlined"
          placeholder="Enter confirm password"
          onChange={this.handleConfirmPassword}
          error={!!this.state.confirmPasswordError}
          helperText={this.state.confirmPasswordError}
          value={this.state.confirmPassword}
        /></div>
         <div className="link-div"> 
           <Link to="/login">Login if you have password</Link> 
         </div>
       <div className="btn">
        <Button onClick={() => this.handleResetPassword()} variant="contained" color="secondary">
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

export default ResetPassword;
