import axios from 'axios'
import {url} from '../../config/url'

export const updateList = list => (
    {
        type: 'LIST_CHANGED',
        payload: list
    }
)

export const changeDescription = event => ({
    type:"DESCRIPTION_CHANGED",
    payload: event.target.value
})

export const search = () => {

    return (dispatch, getState) => {

        const description = getState().todo.description

        const search = description ? `&description__regex=/${description}/` : ''

        const request = axios.get(`${url._TODOS}?sort=createdAt${search}`)
            .then(resp=> dispatch({
                type:"TODO_SEARCHED",
                payload: resp.data
            }))


    }

}

export const add = description => {
    return dispatch => {
        axios.post(`${url._TODOS}`,{description})
            .then(resp=> dispatch(clear()))
            .then(resp=> dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${url._TODOS}/${todo._id}`,{...todo, done: true})
            .then(resp=>dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${url._TODOS}/${todo._id}`, {...todo, done: false})
            .then(resp=> dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${url._TODOS}/${todo._id}`)
            .then(resp=>dispatch(search()))
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}