import React from 'react'

class ListTitles extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            data: []
        } //State
    } // Constructor

    getListTitlesAxios = async () => {
        
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                        List Title
                    </li>
                    <li>
                        List Title
                    </li>
                </ul>
            </div>
        )  //Return
    }  //render
} //Lists

export default ListTitles