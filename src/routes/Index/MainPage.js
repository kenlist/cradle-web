import React from 'react';
import { Layout, Button, Menu, Dropdown, Icon, message } from 'antd';
import MainLayout from 'components/MainLayout/MainLayout';
import ModalButton from 'components/ModalButton/ModalButton';
import ModalActionTable from 'components/ModalActionTable/ModalActionTable';
import SuffixClearInput from 'components/SuffixClearInput/SuffixClearInput';
import MultiModelSelect from 'components/MultiModelSelect/MultiModelSelect';
import styles from './MainPage.css';
import encapAPICall from 'utils/helper';
import { Map } from 'react-amap';

const { Content } = Layout;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onAuthCheckSuccess = () => {
    
  }

  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">所有动物</Menu.Item>
        <Menu.Item key="2">所有事件</Menu.Item>
        <Menu.Item key="3">无人机起飞</Menu.Item>
      </Menu>
    );

    return (
      <MainLayout {...this.props} onAuthCheckSuccess={this.onAuthCheckSuccess}>
        <Content className={styles.content}>
          <Map amapkey="5caf58305829d2ca2dd687834bf3e1b8" version="1.4.0" />
          <Dropdown overlay={menu}>
            <Button className={styles.menuButton} style={{ marginLeft: 8 }}>
              欢迎来来到的动物世界 <Icon type="down" />
            </Button>
          </Dropdown>
        </Content>
      </MainLayout>
    );
  }
}

MainPage.propTypes = {
};

export default MainPage;
