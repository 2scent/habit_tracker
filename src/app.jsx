import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

import React, { Component } from 'react';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) =>
      item.id === habit.id ? { ...item, count: item.count + 1 } : item
    );

    this.setState({
      habits,
    });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) =>
      item.id === habit.id
        ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
        : item
    );

    this.setState({
      habits,
    });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({
      habits,
    });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      {
        id: Date.now(),
        name,
        count: 0,
      },
    ];

    this.setState({
      habits,
    });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) =>
      item.count === 0 ? item : { ...item, count: 0 }
    );

    this.setState({
      habits,
    });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
