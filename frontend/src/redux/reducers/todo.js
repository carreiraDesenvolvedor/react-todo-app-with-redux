
const INITIAL_STATE = {
    description: '',
    list:[]
}

export default function(state=INITIAL_STATE, action){

    switch (action.type){
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        case 'DESCRIPTION_CHANGED':
            return {...state, description:action.payload}
        case 'TODO_CLEAR':
            return {...state, description:''}
        default:
            return state
    }

}

