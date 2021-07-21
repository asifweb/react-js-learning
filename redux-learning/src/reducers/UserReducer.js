import { FETCH_USER, SEND_USER } from "../actions/user-action.type";

const initialState = {
    user: null
};

export const UserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case FETCH_USER:
                return  {...state, ...action.payload};
        case SEND_USER:
                return {...state, ...action.payload}
        default:
            return state;
    }
}