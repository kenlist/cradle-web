import React from 'react';
import { Select } from 'antd';
import styles from './MultiModelSelect.css';

const Option = Select.Option;

class MultiModelSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: []
    }
  }

  handleChange = (value) => {
    this.setState({ 
      selectedValue: value
    });
  }

  internalValue = () => {
    let { selectedValue } = this.state;
    if (selectedValue.length === 0 && this.props.defaultValue) {
      selectedValue = this.props.defaultValue.map((value) => {
        return value.id.toString();
      });
    }

    return selectedValue;
  }

  get value() { 
    const selectedValue = this.internalValue();
    const selectedModelList = selectedValue.map((key) => {
      for (let model of this.props.modelList) {
        if (model.id.toString() === key) {
          return model;
        }
      }
      return null;
    });

    return selectedModelList;
  }

  clear() {
    this.setState({
      selectedValue: []
    });
  }

  render() {
    const model_opts = this.props.modelList.map((value) => {
      return (<Option key={value.id}>{value.name}</Option>);
    });

    const selectedValue = this.internalValue();

    return (
      <Select
        className={styles.select}  
        mode="multiple"
        placeholder={this.props.placeholder}
        value={selectedValue}
        ref={node => this.select = node}
        onChange={this.handleChange}>
        {model_opts}
      </Select>
    );
  }
}

export default MultiModelSelect;
