import React from 'react';
import cx from 'classnames';

class NumbersOnly extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      error: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    event.preventDefault();

    this.setState({
      value: event.target.value,
      error: isNaN(event.target.value)
    })
  }

  render(){
    return (
      <div className="numbers-component">
        <label htmlFor="numbers">Please enter numbers only</label>
        <input
          type="text"
          id="numbers"
          className={cx('numbers-only', {
            error: this.state.error
          })}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default NumbersOnly;
