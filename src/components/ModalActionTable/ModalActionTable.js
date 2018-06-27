import React from 'react';
import { Table, Divider, Popconfirm, Modal } from 'antd';
import styles from './ModalActionTable.css';

class ActionTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateVisible: false,
      actionVisible: false,
      currentRecord: null
    };
  }

  onConfirm = (record) => {
    this.props.onDelete(record);
  }

  showUpdateModal = (record) => {
    this.props.onShowUpdateModal(record);

    this.setState({
      updateVisible: true,
      currentRecord: record
    });
  }

  handleUpdateOK = (e) => {
    this.props.onUpdate(this.state.currentRecord);

    this.setState({
      updateVisible: false,
      currentRecord: null
    });
  }

  handleUpdateCancel = (e) => {
    this.setState({
      updateVisible: false,
      currentRecord: null
    });
  }

  handleUpdateClose = (e) => {
    this.props.onHideUpdateModal();
  }

  showActionModal = (record) => {
    this.props.onShowActionModal(record);

    this.setState({
      actionVisible: true,
      currentRecord: record
    });
  }

  handleActionOK = (e) => {
    this.props.onAction(this.state.currentRecord);
    this.setState({
      actionVisible: false
    });
  }

  handleActionCancel = (e) => {
    this.setState({
      actionVisible: false
    });
  }

  handleActionClose = (e) => {
    this.props.onHideActionModal();
  }

  render() {
    let columns = [...this.props.columns, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        let actionSpan = !this.props.onAction ? null :
          (<span>
            <a href={null} onClick={this.showActionModal.bind(this, record)}>设置</a>
            <Divider type="vertical" />
          </span>);

        let updateSpan = !this.props.onUpdate ? null :
          (<span>
            <a href={null} onClick={this.showUpdateModal.bind(this, record)}>修改</a>
            <Divider type="vertical" />
          </span>);

        return (
          <span>
            {actionSpan}
            {updateSpan}
            <Popconfirm title="Are you sure delete?" onConfirm={this.onConfirm.bind(this, record)} okText="Yes" cancelText="No">
              <a href={null} className="ant-dropdown-link">删除</a>
            </Popconfirm>
          </span>
        );
      },
    }];

    let updateModalContent = null;
    let actionModalContent = null;

    for (let child of this.props.children) {
      if (child.props.id === "updateModalContent") {
        updateModalContent = child;
      } else if (child.props.id === "actionModalContent") {
        actionModalContent = child;
      }
    }

    return (
      <div>
        <Table 
            className={this.props.expandedRowRender ? "nested-table" : null}
            columns={columns} 
            dataSource={this.props.dataSource}
            expandedRowRender={this.props.expandedRowRender}
            pagination={this.props.pagination} />
        <Modal
            title="修改"
            visible={this.state.updateVisible}
            onOk={this.handleUpdateOK}
            onCancel={this.handleUpdateCancel}
            afterClose={this.handleUpdateClose}>
            {updateModalContent}
        </Modal>
        <Modal
            title="设置"
            visible={this.state.actionVisible}
            onOk={this.handleActionOK}
            onCancel={this.handleActionCancel}
            afterClose={this.handleActionClose}>
            {actionModalContent}
        </Modal>
      </div>
    );
  }
}

export default ActionTable;
