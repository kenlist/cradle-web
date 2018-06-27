import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import LoginPage from './routes/Login/LoginPage';
import LogoutPage from './routes/Login/LogoutPage';
import IndexPage from './routes/Index/IndexPage';

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

        <Redirect exact from="/" to="/index" />
        <Route path="/index" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
