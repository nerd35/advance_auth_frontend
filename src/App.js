import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/routes/PrivateRoute';
import ForgotPasswordScreen from './components/screens/ForgotPassword/ForgotPasswordScreen';
import LoginScreen from './components/screens/Login/LoginSceen';
import PrivateScreen from './components/screens/PrivateScreen/PrivateScreen';
import RegisterScreen from './components/screens/Register/RegisterSceen';
import ResetPasswordScreen from './components/screens/ResetPassword/ResetPasswordScreen';


const App = () => {
  return (
    <Router>

      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
