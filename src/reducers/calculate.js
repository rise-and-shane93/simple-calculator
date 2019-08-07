import * as CalculatorActionTypes from '../actionTypes/calcActions';

const initialState = 0;

export default function addNum(state=initialState, action) {
    switch(action.type) {
        case CalculatorActionTypes.NUMBER_BTN: {
            return state += action.num;
        }
        default: 
            return state;
    }
}