import React from 'react';
import { Input, Icon } from 'antd';
// import styles from './SuffixClearInput.css';

class SuffixClearInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null
    }
  }

  emitEmpty = () => {
    this.realInput.focus();
    this.setState({ inputValue: '' });
  }

  onChangeModalName = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  get value() { 
    let { inputValue } = this.state;
    if (!inputValue && this.props.defaultValue) {
      inputValue = this.props.defaultValue;
    }
    return inputValue;
  }

  clear() {
    this.setState({
      inputValue: null
    });
  }

  render() {
    let inputValue = this.value;
    const suffix = inputValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <Input
        className={this.props.className}
        placeholder={this.props.placeholder}
        prefix={<Icon type={this.props.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={inputValue}
        onChange={this.onChangeModalName}
        ref={node => this.realInput = node} />
    );
  }
}

export default SuffixClearInput;
