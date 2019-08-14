import { calcActions, calcBtns, numberBtns } from '../actionTypes/calcActionTypes';

export const addNumber = num => {
    return {
        type: numberBtns.NUMBER_BTN,
        num
    }
};

export const addSymbol = symbol => {
    return {
        type: calcBtns.OPERATOR_BUTTON,
        symbol
    }
}

export const equalSymbol = () => {
    return {
        type: calcBtns.EQUAL_BUTTON,
    }
}