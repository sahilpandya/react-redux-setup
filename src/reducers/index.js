/**
 * Created by sahilpandya on 18/03/18.
 */
import {combineReducers} from 'redux';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const initialState = {
    id: 1,
    first: "Sahil",
    last: "Pandya",
    age: 26,
    description: "Sahil is a React Developer and loved to play every sports.",
    thumbnail: require("../static/images/sahil.jpg")
};
const ActiveUserReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    console.log(state, 'inside active user reducer');
    return state;
}

const UserReducer = function () {
    return [
        {
            id: 1,
            first: "Sahil",
            last: "Pandya",
            age: 26,
            description: "Sahil is a React Developer and loved to play any sports.",
            thumbnail: require("../static/images/sahil.jpg")
        },
        {
            id: 2,
            first: "Rushab",
            last: "Khandare",
            age: 25,
            description: "Rushab loves to eat food fatak se.. :) .",
            thumbnail: require("../static/images/rushab.jpg")
        },
        {
            id: 3,
            first: "Jai",
            last: "Prakash",
            age: 27,
            description: "Jai likes to write code and play guitar.",
            thumbnail: require("../static/images/jai.jpg")
        }
    ]
}


const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers