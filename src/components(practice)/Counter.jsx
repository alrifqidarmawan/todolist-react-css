import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: 'Hitung mundur belum dimulai'
        };
    }

    componentDidMount() {
        console.log('Counter component did mount!');
        this.setState({ message: 'komponen siap dipakai' });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Count update from', prevState.count, 'to', this.state.count);
            document.title = `Hitungan: ${this.state.count}`;
        }
    }

    componentWillUnmount() {
        console.log('Counter componen will unmount');
        document.title = 'React App';
    }

    // function baru
    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Hitung mundur!</h1>
                <p>Pesan: {this.state.message}</p>
                <p>Angka saat ini: {this.state.count }</p>
                <p>props dari parent: {this.props.initialMessage || 'tidak ada pesan awal'}</p>
                <button onClick={this.increment}>Tambah (+)</button>
                <button onClick={this.decrement}>Kurang (-)</button>
            </div>
        );
    }
}

export default Counter;
