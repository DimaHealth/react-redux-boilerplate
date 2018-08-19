import { CAR_SELECTED} from '../constants/actionTypes';


export const selectCar = ((car)=>{
    return{
        type: CAR_SELECTED,
        payload: car
    }
})
