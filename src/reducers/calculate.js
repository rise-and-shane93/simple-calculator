import * as CalculatorActionTypes from '../actionTypes/calcActions';

const initialState = {
    startValue: ['0'],
    calcIndex: 0,
    userValue: 0
};

export default function addNum(state=initialState, action) {
    let screenNum = Object.values(state.startValue);
    switch(action.type) {
        case CalculatorActionTypes.NUMBER_BTN: {
            console.log(screenNum[0]);
            console.log(screenNum);
            return screenNum[0] += action.num;
            //return screenNum += action.num;
            //return screenNum;
        }
        default: 
            return state;
    }
}