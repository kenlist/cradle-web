import React from 'react';
import { Button, Modal } from 'antd';
// import styles from './ModalButton.css';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  showModal = () => {
    if (this.props.onShowModal) {
      this.props.onShowModal();
    }

    this.setState({
      visible: true
    });
  }

  handleHideModal = () => {
    if (this.props.onHideModal) {
      this.props.onHideModal();
    }
  }

  handleOK = (e) => {
    if (this.props.onOK) {
      this.props.onOK();
    }

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.title}</Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOK}
          onCancel={this.handleCancel}
          afterClose={this.handleHideModal}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalButton;
