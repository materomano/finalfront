export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}

        case 'ADD_FAVS':
            return {...state, favs: [...state.favs, action.payload]}

    case 'DELETE_FAVS':
        return {...state, favs:[...state.favs, action.payload]}
            case 'CHANGE_THEME' :
            return {...state, theme:  action.payload}
        
        default:
            return state

    } 

}