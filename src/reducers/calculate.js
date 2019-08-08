import * as CalculatorActionTypes from '../actionTypes/calcActions';

// const initialState = {
//     startValue: ['0'],
//     calcIndex: 0,
//     userValue: 0
// };
//const initialState = ['0'];
const initialState = {
    startValue: [],
    calcIndex: 0,
};

export default function addNum(state=initialState, action) {
    //let screenNum = Object.values(state.startValue);
    switch(action.type) {
        case CalculatorActionTypes.NUMBER_BTN: {
            // console.log(screenNum[0]);
            // console.log(screenNum);
            //return screenNum[0] += action.num;
            //return screenNum += action.num;
            //return screenNum;

            //this.setState(state => {startValue: [...state.startValue, action.num]});
            return {
                startValue: [...state.startValue, action.num]
            }
            //return state.startValue += action.num;
        }
        default: 
            return state;
    }
}