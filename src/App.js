import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import ForgetPassword from "./pages/resetpassword/ForgetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import Example from "./components/Cards/card";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignUp}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/fpassword" component={ForgetPassword}></Route>
          <Route exact path="/resetpassword/:id" component={ResetPassword}></Route>
          <Route exact path="/example" component={Example}></Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
