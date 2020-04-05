let intialState = {
    listFiml : [],
    fimls: [],
    cinema: [],
    result: []
}

const fimlsReducer = (state = intialState, action) =>{
    switch (action.type){
        case "GET_LIST_FILM":
            state.listFiml = action.listFiml;
            return {...state};
        case "GET_FILM":
            state.fimls = action.fimls;
            return {...state};
        
        case "GET_CINEMA":
            state.cinema = action.cinema;
            return {...state};
        
            case "ADD_FILM":
                state.listFiml = [...this.state.listFiml, action.addFilm];
                return {...state};
        case "TRAILER":
            state.result = action.trailer;
            return {...state};
        default:
            return {...state}    
    }
}
export default fimlsReducer;