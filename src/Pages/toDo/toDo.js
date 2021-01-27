import React from 'react'
import ListTitles from '../../components/lists/lists'


class ToDoPage extends React.Component {
    constructor(props){
        super(props)
        this.state =  {
            titles: []
        } //  state
    }  //constructor

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form>
                    <button>Add List</button>
                    <input/>
                    <button>Add Task</button>
                    <input/>
                </form>
                <ListTitles/>
            </div>
        )  //return
    } //render
} //ToDoPage

export default ToDoPage