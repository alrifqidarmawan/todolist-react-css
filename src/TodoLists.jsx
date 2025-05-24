import React, { Component } from 'react'
import './todolist.css'
export default class TodoLists extends Component {
    state = {
        todos: ["Go for a walk 4PM","Eat ice cream 5PM","Badminton with friends 8PM","Freecodecamp 10PM"],
        newTodos: ''
    }
    handleChange = (e) => {
        this.setState({
            newTodos: e.target.value
        });
    }
    addTodos = () => {
        const newTodosTrimmed = this.state.newTodos.trim();

        if (newTodosTrimmed === '') {
            return;
        }

        this.setState(
            prevState => ({
                todos: [...prevState.todos, newTodosTrimmed],
                newTodos: ''
            }));
    }
    removeTodos = (indexToDelete) => {
        this.setState(
            prevState => ({
                todos: prevState.todos.filter((_, index) => index != indexToDelete)
            })
        );
    }

render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'clamp(300px, 60%, 500px)',
            minHeight: '35rem',
            margin: '5.5em auto',
            backgroundColor: '#f9f9f9',
            fontFamily: 'monospace',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden'
        }}>
            <div style={{
                padding: '15px 20px',
                backgroundColor: '#ECDFCC',
                borderBottom: '1px solid #ddd'
            }}>
                <h1 style={{ margin: 0, fontSize: '1.5em', textAlign: 'center', color: '#697565' }}>
                    Hi, What are you planning to do???
                </h1>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                borderBottom: '1px solid #eee',
            }}>
                <input
                    style={{
                        fontFamily: 'monospace',
                        color: 'black',
                        fontSize: '1em',
                        padding: '10px',
                        flexGrow: 1,
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginRight: '10px',
                        outline: 'none'
                    }}
                    value={this.state.newTodos}
                    onChange={this.handleChange}
                    type="text"
                    placeholder='you can type it here... and saved it'
                />
                <button
                    style={{
                        padding: '8px 12px',
                        border: 'none',
                        backgroundColor: '#3C3D37',
                        color: 'white',
                        fontSize: '1em',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={this.addTodos}
                >+</button>
            </div>

            <div style={{
                height: '390px',
                overflowY: 'auto',
                padding: '0 15px'
            }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    {this.state.todos.map((todo, index) => (
                        <React.Fragment key={index}>
                            <li style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px 0',
                            }}>
                                <span style={{
                                    fontFamily: 'monospace',
                                    color: 'black',
                                    fontSize: '1em',
                                    wordBreak: 'break-word'
                                }}>
                                    {todo}
                                </span>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        color: '#d9534f',
                                        fontSize: '1.2em',
                                        cursor: 'pointer',
                                        padding: '0 5px'
                                    }}
                                    onClick={() => { this.removeTodos(index) }}>
                                    ×
                                </button>
                            </li>
                            {index < this.state.todos.length - 1 && (
                                <hr style={{
                                    border: 'none',
                                    borderTop: '1px solid #eee',
                                    margin: '0'
                                }} />
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}
}
