import React, { Component } from "react";
import { Card, TextField, Button} from "@material-ui/core";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLogin = () => {};

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
          onChange={this.handleemail}
          error={!!this.state.emailError}
          helperText={this.state.emailError}
          value={this.state.email}
        /></div>
        <div className="password-div">
         <TextField
          id="password"
          className="row-content"
          label="Password"
          variant="outlined"
          placeholder="Enter Password"
          onChange={this.handlepassword}
          error={!!this.state.passwordError}
          helperText={this.state.passwordError}
          value={this.state.password}
        />
         </div>
         <div className="link-div">
           <h4>If you not have account already <a href="/SignUp">Sign up</a> here.</h4>
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

export default Login;
