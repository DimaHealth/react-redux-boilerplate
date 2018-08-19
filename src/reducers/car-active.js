import { CAR_SELECTED} from '../constants/actionTypes';

export default function (state = null, action) {
    switch (action.type){
        case CAR_SELECTED:
            return action.payload;

        default:
            return state;
    }
}

