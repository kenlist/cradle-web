import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown } from 'antd';
import { CradleClient } from '../../api/cradle-client';
import styles from './MainLayout.css';
import logo from '../../assets/logo.png';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminName: "",
      authCheckStatus: false
    }
    this.client = CradleClient.sharedInstance();
  }

  async authCheck() {
    if (this.client.hasToken()) {
      try {
        const {data} = await this.client.adminInfo();
        if (data && data.code === 0) {
          // get info success
          this.setState({
            adminName: data.data.name,
            authCheckStatus: true
          });

          if (this.props.onAuthCheckSuccess) {
            this.props.onAuthCheckSuccess();
          }
          return;
        }
      } catch (error) {
        console.log("authCheck failed:" + error);
      }  
    }

    this.props.history.replace("/login");    
  }

  componentWillMount() {
    this.authCheck();
  }

  render() {
    if (!this.state.authCheckStatus) {
      return <div></div>;
    }

    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/updatepassword">修改密码</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/logout">登出</Link>
        </Menu.Item>
      </Menu>
    );

    let contentHeight = window.innerHeight - 69 - 64;
    if (contentHeight < 450) {
      contentHeight = 450;
    }

    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo}>
            <Avatar className={styles.avatar} src={logo} />
            <div className={styles.title}>Cradle Admin</div>
          </div>
          <div className={styles.adminName}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" style={{ color: 'white' }}>
                {this.state.adminName} <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ padding: '0 0px', height: contentHeight }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cradle Admin @2018 Created by @阿里云IoT-无锡Team
        </Footer>
      </Layout>
    );
  }
}

export default MainLayout;
