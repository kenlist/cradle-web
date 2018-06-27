import React from 'react';
import { Form, Input, Icon, Button, message } from 'antd';
import { CradleClient } from 'api/cradle-client';
import LoginLayout from 'components/LoginLayout/LoginLayout';
import encapAPICall from 'utils/helper';
import { AdminError } from 'utils/constant';
import logo from 'assets/logo.png';
import styles from './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
    this.client = CradleClient.sharedInstance();
  }

  adminLogin = (username, password) => {
    return {
      success: (data) => {
        // create success
        let payload = data.data;
        this.client.saveToken(payload);
        this.props.history.push('/');
      },
      fail: (code) => {
        if (code == AdminError.errorAdminNameOrPasswordIncorrect) {
          message.warn(`错误的用户名或密码`, 4);
        } else {
          message.warn(`登录错误code: ${code}`, 4);
        }
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
        if (!error) {
            const {username, password} = values;
            encapAPICall('adminLogin', this, username, password);
        }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LoginLayout>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="cradle admin"/>
            <span>Cradle Admin</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item style={{marginBottom:5}}>
              {
                getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                })(<Input addonBefore={<Icon type="user"/>} placeholder="Username"/>)
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!'
                    }
                  ]
                })(<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />)
              }
            </Form.Item>
            <Form.Item style={{marginBottom:5}}>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LoginLayout>
    );
  }
}

LoginPage.propTypes = {
};

export default Form.create({})(LoginPage);

