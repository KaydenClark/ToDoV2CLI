import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
  import ToDoPage from './toDo/toDo'

  export const Routes = () =>  {

    return (
        <div>
            <Switch>
                <Route exact path= '/'>
                    {/* <YOURFUNCTIONHERE/> */}
                </Route>
                <Route exact path= '/ToDo'>
                    <ToDoPage/>
                </Route>
            </Switch>
        </div>
    )  //Return
  } //Routes

export default Routes