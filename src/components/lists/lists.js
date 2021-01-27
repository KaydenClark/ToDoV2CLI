import React from 'react'
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
        this.renderListTitles(listTitles.data.data)
        // console.log(listTitles)
    }

    renderListTitles  =  async (listTitles) => {
        console.log(listTitles)
        const titles = await listTitles.map((title)  =>
            <ListTitles title={title}/>
            // console.log(title)
            )
        return titles
    }

    componentDidMount =  async () => {
        await this.getListTitlesAxios()
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.titles}
                </ul>
            </div>
        )  //Return
    }  //render
} //Lists

export default ListTitles