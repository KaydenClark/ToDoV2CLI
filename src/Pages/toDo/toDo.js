import React from 'react'
import ListTitles from '../../components/lists/lists'
// import axios from 'axios'
// import {
//     // baseProd,
//     base
// } from '../../components/const'

// const api = `${base}/todov2/lists`

class ToDoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: []
        } //  state
    }  //constructor

    // getListTitlesAxios = async () => {
    //     console.log('Connected for reading list titles')
    //     const [listTitles] = await Promise.all([
    //         axios.get(api)
    //     ])
    //     this.state.titles.push(listTitles.data.data)
        
    // }

    // renderListTitle = async () => {
    //     const listTitles = this.state.titles
    //     listTitle = <RenderListTitle title={title} />
    //     console.log(listTitles)
    //     // console.log(this.state.titles)
    // }

    // componentDidMount = async () => {
    //     await this.getListTitlesAxios()
    //     await this.renderListTitle()
    // }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form>
                    <button>Add List</button>
                    <input />
                    <button>Add Task</button>
                    <input />
                </form>
                <ul>
                    <ListTitles  />
                </ul>
            </div>
        )  //return
    } //render
} //ToDoPage

export default ToDoPage