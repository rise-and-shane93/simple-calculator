import * as CalculatorActionTypes from '../actionTypes/calcActions';

export const addNumber = num => {
    return {
        type: CalculatorActionTypes.NUMBER_BTN,
        num
    }
};
