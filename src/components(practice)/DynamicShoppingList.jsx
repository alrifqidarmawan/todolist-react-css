import React, { Component } from 'react'

export default class DynamicShoppingList extends Component {
    state = {
        items: [],
        newItemText: ''
    }
    handleInputChange = (e) => {
        this.setState({ newItemText: e.target.value });
    }
    addItemButton = () => {
        console.log("Error this")
        const newItem = this.state.newItemText;

        if (newItem.trim() === '') {
            return;
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
            newItemText: ''
        }));
    }
    render() {
    return (
        <div>
            <h1>Dynamic Shopping List</h1>
            <input type="text" value={this.state.newItemText} onChange={this.handleInputChange} placeholder='Ketik Barangnya disini...' />
            <button onClick={this.addItemButton}>Tambah Item</button>
            <ul>
                {this.state.items.map((item, index) => (<li key={index}>{ item }</li>))}
            </ul>
      </div>
    )
  }
}
