import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import LoginPage from './routes/Login/LoginPage';
import LogoutPage from './routes/Login/LogoutPage';
import MainPage from './routes/Index/MainPage';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />       
        <Route path="/logout" exact component={LogoutPage} />

        <Redirect exact from="/" to="/main" />
        <Route path="/main" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
