import * as CalculatorActionTypes from '../actionTypes/calcActions';

export const addNumber = num => {
    console.log(typeof num);
    return {
        type: CalculatorActionTypes.NUMBER_BTN,
        num
    }
};
