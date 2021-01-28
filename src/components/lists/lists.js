import React from 'react'
import RenderListTitle from '../../components/lists/list'
import axios from 'axios'
import {
    // baseProd,
    base
}  from '../../components/const'

const api = `${base}/todov2/lists`

class ListTitles extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            titles: []
        } //State
    } // Constructor

    getListTitlesAxios = async () => {
        console.log('Connected for reading list titles')
        const [listTitles] = await Promise.all([
            axios.get(api)
        ])
        this.state.titles.push(listTitles.data.data)
        
    }

    renderListTitle = () => {
        const listTitles = this.state.titles
        const listTitle = <RenderListTitle title={listTitles[0]} />
        console.log(listTitles)
        console.log(listTitle)
        // console.log(this.state.titles)
    }

    componentDidMount = async () => {
        await this.getListTitlesAxios()
        await this.renderListTitle()
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                    <RenderListTitle title=  {this.state.titles[0]}/>
                    </li>
                </ul>
            </div>
        )  //Return
    }  //render
} //Lists

export default ListTitles