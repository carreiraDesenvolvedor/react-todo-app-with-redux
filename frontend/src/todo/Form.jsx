import React,{Component} from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {changeDescription, search, add, clear} from "../redux/actions/todo";

class Form extends Component {

    constructor(props){

        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount(){

        console.log('componentDidMount')
        this.props.search()

    }

    keyHandler(e){

        const {add, search, description} = this.props

        if(e.key == 'Enter'){

            e.shiftKey ? search() : add(description)

        }else if(e.key == 'Escape'){

            this.props.handleClear()

        }

    }

    render(){

        const {keyHandler} = this

        const {add, search, description} = this.props

        const props = this.props

        return(
            <div role={"form"} className={"todoForm"}>

                <Grid cols='12 9 10' >

                    <div className={"col-xs-12 col-sm-9 col-md-10"}>
                        <input
                            id={"description"}
                            placeholder={"Add your task!"}
                            className={"form-control"}
                            value={props.description}
                            onKeyUp={keyHandler}
                            onChange={props.changeDescription}
                        />
                    </div>

                </Grid>

                <Grid cols='12 3 2'>

                    <IconButton
                        onClick={()=>add(description)}
                        hide={false}
                        style={"primary"}
                        icon={"plus"} />

                    <IconButton
                        onClick={()=>search()}
                        hide={false}
                        style={"info"}
                        icon={"search"}
                    />

                    <IconButton
                        onClick={props.clear}
                        hide={false}
                        style={"default"}
                        icon={"close"}
                    />

                </Grid>
            </div>
        )
    }



}

const mapStateToProps = state => {

    return {
        description: state.todo.description
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)