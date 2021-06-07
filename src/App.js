import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import AppBarComponent from "./components/AppBar";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignUp}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={AppBarComponent}></Route>
          <Route exact path="/fpassword" component={ForgetPassword}></Route>
          <Route exact path="/resetpassword/:id" component={ResetPassword}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
