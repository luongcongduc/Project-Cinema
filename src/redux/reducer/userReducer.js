const initialState = {
    listUser: [],
    keyword: "",
    userEdit: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            state.listUser = [...state.listUser, action.user];
            return { ...state };

        case "GET_LIST_USER":
            state.listUser = action.listUser;
            return { ...state };

            case "GET_USER":
                state.listUser = [...state.listUser, action.user];
                return {...state};
        case "ON_FILTER":
            state.keyword = action.keyword;
            return { ...state };

        case "ON_EDIT":
            state.userEdit = action.user;
            return {...state};
        default:
            return { ...state }
    }
}

export default userReducer;