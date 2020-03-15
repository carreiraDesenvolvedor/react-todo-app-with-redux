import React,{Component} from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './Form'
import TodoList from './List'

export default class Todo extends Component{

    render(){

        return(
            <div>
                <PageHeader name={"Tasks"} small={"Add"} />
                <TodoForm />
                <TodoList />
            </div>
        )
    }

}
