import React from 'react';
import { Layout, Button, message } from 'antd';
import MainLayout from 'components/MainLayout/MainLayout';
import ModalButton from 'components/ModalButton/ModalButton';
import ModalActionTable from 'components/ModalActionTable/ModalActionTable';
import SuffixClearInput from 'components/SuffixClearInput/SuffixClearInput';
import MultiModelSelect from 'components/MultiModelSelect/MultiModelSelect';
import styles from './IndexPage.css';
import encapAPICall from 'utils/helper';

const { Content } = Layout;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onAuthCheckSuccess = () => {
    
  }

  render() {

    return (
      <MainLayout {...this.props} onAuthCheckSuccess={this.onAuthCheckSuccess}>
        <Content className={styles.content}>
         test
        </Content>
      </MainLayout>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
