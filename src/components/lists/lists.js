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
        const res = listTitles.data
        res.map(title =>
            this.state.titles.push(title[0].title) 
        )
        // console.log(this.state.titles)
        // console.log(this.props)       
        // console.log(<RenderListTitle title= {this.state.titles}/>)
    }

    renderListTitle = () => {
        const titlesList = this.state.titles.map(title => 
            <RenderListTitle 
            key = {Date.now()} 
            title= {title}
            getTitles= {this.getListTitlesAxios}/>)
        // console.log(titlesList)
        return titlesList
    }

    componentDidMount = async () => {
        await this.getListTitlesAxios()
        this.renderListTitle()
        // console.log(this.renderListTitle())
    }

    render(){
        return(
            <div>
                <ul>
                    <RenderListTitle />
                    {/* {this.renderListTitle} */}
                </ul>
            </div>
        )  //Return
    }  //render
} //Lists

export default ListTitles