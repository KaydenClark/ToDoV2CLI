import React from 'react'
import ListTitles from '../../components/lists/lists'
import axios from 'axios'
import {
    baseProd
}  from '../../components/const'

const api = `${baseProd}/lists`

class ToDoPage extends React.Component {
    constructor(props){
        super(props)
        this.state =  {
            titles: []
        } //  state
    }  //constructor

    getListTitlesAxios = async () => {
        console.log('Connected for reading list titles')
        const [listTitles] = await Promise.all([
            axios.get(api)
        ])
        this.renderListTitles(listTitles)
    }

    renderListTitles  =  async (listTitles) => {
        const titles = await listTitles.map((title)  =>
            <ListTitles
                title= {title}
            />)
        console.log(titles)
    }

    componentDidMount =  async () => {
        // await this.getListTitlesAxios()
    }

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