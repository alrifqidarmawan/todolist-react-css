import React, { Component } from 'react'

export default class ShoppingList extends Component {
    state = {
        items: [],
        newItems: ''
    }
    handleChange = (e) => {
        this.setState({
            newItems:
                e.target.value})
    }
    addItem = () => {
        const newItemsTrimmed = this.state.newItems.trim();

        if (newItemsTrimmed === '') {
            return;
        }

        this.setState(
            prevState => ({
                items: [...prevState.items, newItemsTrimmed],
                newItems: ''
            }));
    }
    removeItem = (indexToDelete) => {
        this.setState(
            prevState => ({
                items: prevState.items.filter((_, index) => index !== indexToDelete)
            })
        );
    }
    render() {
    return (
        <div>
            <h2>Tambah belanjaan</h2>
            <input type="text" value={this.state.newItems} placeholder='Tambahkan barang disini....' onChange={this.handleChange}/>
            <button onClick={this.addItem}>Tambahkan belanjaan</button>
            <h1>Daftar Belanjaan</h1>
            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index} style={{display: 'flex'}}>{item}
                        <button onClick={() => this.removeItem(index)} style={{ marginLeft: '20px' }} //mengambil indexnya dan wow terlalu banyak arrow function...
                        >Hapus</button>
                    </li>
                    //harus return walaupun arrow function atau pake () untuk tanpa return
                ))}
            </ul>
      </div>
    )
  }
}
