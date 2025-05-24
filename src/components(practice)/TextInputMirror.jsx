import React, { Component } from 'react'

export default class TextInputMirror extends Component {
    state = {
        inputText: ''
    }
    handleEventChange = (e) => {
        this.setState({inputText: e.target.value})
    }

    render() {
    return (
      <div>
            <input type="text" value={this.state.inputText} placeholder='Ketik disini...' onChange={this.handleEventChange} />
            <h1>you typed this: { this.state.inputText }</h1>
      </div>
    )
  }
}
