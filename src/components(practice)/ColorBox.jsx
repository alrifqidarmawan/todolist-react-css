import React, { Component } from 'react'

export default class ColorBox extends Component {
    state = {
        boxColor: 'lightblue'
    }

    render() {
    return (
      <div>
            <div style={
                {
                    width: '100px',
                    height: '100px',
                    border: '2px solid',
                    backgroundColor: this.state.boxColor
                }
            }>This is box</div>
            <button onClick={() => {
                this.setState({boxColor: 'red'})
            }}>Ubah jadi Warna Merah</button>
            <button onClick={() => {
                this.setState({boxColor: 'blue'})
            }}>Ubah jadi Warna Biru</button>

            <button onClick={() => {
                this.setState({boxColor: 'lightblue'})
            }}>Reset button</button>
      </div>
    )
  }
}
