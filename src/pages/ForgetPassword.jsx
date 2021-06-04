import React, { Component } from "react";
import { Card, TextField, Button,Snackbar,IconButton} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { resetLink } from "../services/userService";

class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email:"",
      emailError:"",
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

  handleFindEmail = async() => {
    if(this.state.email !== null && this.state.email !== undefined) {
      let emailId = {
        email: this.state.email,
      }
      await resetLink(emailId).then((response)=>{
        console.log("Response from reset link functon"+JSON.stringify(response))
        this.setState({
          snackBarOpen:true,
          snackbarMSG: response.data.message
        }); 
        this.handleResetForm();
      }).catch((error)=>{
        this.setState({
          snackBarOpen:true,
          snackbarMSG:error.message
        });
      });
    } 
    else {
      this.setState({
        snackBarOpen:true,
        emailError: "Email is required",
        snackbarMSG:"Unbale to send reset link check entered email!!"
      }); 
    }
  };

  handleResetForm(){
    this.setState({
    email:""
  });
};

  render() {
    return (
      <div className="signUp-container">
      <Card id="fpassword-container">
       <div className="title-div">
       <h1>Forget Password</h1>
       <p>Find your email</p>
       </div>   
        <div className="row-content">
        <TextField
          id="email"
          label="Email"
          className="row-content"
          variant="outlined"
          placeholder="Enter your recovery Email"
          onChange={this.handleEmail}
          error={!!this.state.emailError}
          helperText={this.state.emailError}
          value={this.state.email}
        /></div>
    
         <div className="link-div">
           <span>If you have account already </span> 
           <Link to="/login">Sign In</Link>
         </div>
       <div className="btn">
        <Button onClick={() => this.handleFindEmail()} variant="contained" color="secondary">
          Next
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

export default ForgetPassword;
