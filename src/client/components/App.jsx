import React from 'react';
import List from './List/List.jsx';
import Input from './Input/Input.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Input />
      </div>
    );
  }
}

export default App;
