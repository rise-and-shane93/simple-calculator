import { calcActions, calcBtns, numberBtns, memoryBtns } from '../actionTypes/calcActionTypes';

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

export const memoryButton = symbol => {
    return {
        type: memoryBtns.MEMORY_BTN,
        symbol
    }
}

export const calculatorActions = () => {
    return {
        type: calcActions.POWER_BUTTON,
    }
}

export const equalSymbol = () => {
    return {
        type: calcBtns.EQUAL_BUTTON,
    }
}