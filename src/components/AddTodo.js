import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
        cats: ''
    }

    changeThing = (event) => this.setState({
        [event.target.name]: event.target.value
    })

    render() {
        return (
            <form style={{ display: "flex" }}>
                <input type="text" 
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="add todo.."
                value={this.state.title}
                onChange={this.changeThing}/>
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
                <input name="cats" onChange={this.changeThing}/>
            </form>
        )
    }
}

export default AddTodo
