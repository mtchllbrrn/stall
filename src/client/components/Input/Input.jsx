import React from 'react';
// import Messages from '../../models/Messages.js';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(e);

    // const message = {
      // text: this.state.message,
      // createdAt: new Date(),
    // };

    // Messages.store(message);
    document.getElementById('input-form').reset();
  }

  render() {
    return (
      <form id="input-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInput} />
        <input type="submit" />
      </form>
    );
  }
}

export default Input;
