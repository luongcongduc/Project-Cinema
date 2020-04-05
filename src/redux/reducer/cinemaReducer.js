const intialState = {
    listCinema:[],
    movieCinema:[],
    listShowTimes: [],
    
}

const cinemaReducer = (state = intialState,action) =>{
    switch(action.type){
        case 'GET_LIST_CINEMA':
            state.listCinema = action.listCinema;
            return {...state};
        case 'GET_MOVIE_CINEMA':
            state.movieCinema = action.movieCinema;
            return {...state};
        
        case 'LIST_SHOWTIMES':
            state.listShowTimes = action.listShowTimes;
            return{...state};
        default:
            return {...state};
    }
}
export default cinemaReducer;