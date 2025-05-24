import React, { Component } from 'react'

export default class TodoList extends Component {
    state = { count: 0 }
    render() {
    return (
      <div>
            <h1>counter: { this.state.count }</h1>
            <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
            }}>Tambah</button>
            <button onClick={() => {
                    this.setState({ count: this.state.count - 1});
            }}>Kurang</button>
      </div>
    )
  }
}
