import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmailVerification from './components/EmailVerification';
import PageNotFound from './components/PageNotFound';
import { Auth } from 'aws-amplify';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PasswordChangeVerification from './components/PasswordChangeVerification';
import ChangePassword from './components/ChangePassword';
import ChangePasswordConfirm from './components/ChangePasswordConfirmation';
class App extends Component {

  state = {
    isAuthenticated: false
  }
  setAuthenticationStatus = status => {
    this.setState({ isAuthenticated: status });
  }
 
  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
    } catch(error) {
      this.setState({ isAuthenticating: false }); 
    }
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      setAuthenticationStatus: this.setAuthenticationStatus
    }
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              {this.state.isAuthenticated && <Route exact path="/dashboard" render={(props) => <Dashboard {...props} auth={authProps}/> }/>}
              <Route exact path="/" render={(props) => <Register {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <Login {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/passwordChangeVerification" render={(props) => <PasswordChangeVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
              <Route exact path="/emailVerification" render={(props) => <EmailVerification {...props} auth={authProps}/> }/>
              <Route exact path="/*" render={(props) => <PageNotFound {...props} auth={authProps}/> } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;