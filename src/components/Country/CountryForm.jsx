import { Component } from 'react';

export default class CountryForm extends Component {
  state = {
    value: ''
  };

  handleOnChange = (event) => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.value.trim() === '') {
      return;
    }

    this.setState({ value: '' });
    this.props.submit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleOnChange}
          placeholder="Search any counrty..."
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  }
}
