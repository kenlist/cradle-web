import React from 'react';
import {Layout} from 'antd';
import styles from './LoginLayout.css';
const {Content} = Layout;

class LoginLayout extends React.Component {
  render() {
    return (
      <Layout className={styles.normal}>
        <div className={styles.background}></div>
        <Content className={styles.content}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default LoginLayout;
