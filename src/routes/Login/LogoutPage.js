import React from 'react';
import { CradleClient } from '../../api/cradle-client';

class LogoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.client = CradleClient.sharedInstance();
  }

  componentWillMount() {
    this.client.adminLogout();
    this.client.clearToken();
    this.props.history.replace("/login");
  }

  render() {
    return (<div></div>);
  }
}

LogoutPage.propTypes = {
};

export default LogoutPage;

