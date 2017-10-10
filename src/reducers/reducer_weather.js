import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // don't directly manipulate state. always return new state. Don't use array.push
            // return state.concat([action.payload.data]); // inserts at the bottom or last
            // OR
            return [ action.payload.data, ...state ]; // inserts at the top or at the first
    }
    
    return state;
}