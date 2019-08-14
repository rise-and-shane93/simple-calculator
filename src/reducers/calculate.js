import { calcActions, calcBtns, numberBtns } from '../actionTypes/calcActionTypes';

const initialState = {
    result: '',
    currentItem: '',
    displayNum: 0,
    firstCalc: true,
    operatorSymbol: ''
};

export default function addNum(state=initialState, action) {
    let resNum = parseFloat(state.result);
    let currNum = parseFloat(state.currentItem);
    let sum;
    let result;
    let opSymbol;
    switch(action.type) {
        case numberBtns.NUMBER_BTN: {
            return {
                ...state,
                result: state.result,
                currentItem: state.currentItem += action.num,
                displayNum: state.currentItem,
                firstCalc: state.firstCalc
            }
        }
        case calcBtns.OPERATOR_BUTTON: {
            //if the user adds
            if (action.symbol === '+'){
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        result = state.currentItem;
                    } else {
                        result = state.result;
                    }
                    return {
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: '+'
                    }
                } else {
                    if (state.operatorSymbol === '-') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === '+') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === 'x') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/') {
                        sum = resNum / currNum;
                    }
                    return {
                        result: sum,
                        currentItem: '',
                        displayNum: sum,
                        firstCalc: state.firstCalc,
                        operatorSymbol: '+'
                    }
                }
            //if the user subtracts
            } else if (action.symbol === '-') {
                if (state.firstCalc) {
                    sum = resNum - currNum; 
                    if (typeof state.result === 'string') {
                        result = state.currentItem;
                    } else {
                        result = state.result;
                    }
                    return {
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: '-'
                    }    
                } else {
                    if (state.operatorSymbol === '+') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === '-') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === 'x') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/') {
                        sum = resNum / currNum;
                    }
                    return {
                        result: sum,
                        currentItem: '',
                        displayNum: sum,
                        firstCalc: state.firstCalc,
                        operatorSymbol: '-'
                    }
                }
            } else if (action.symbol === 'x') {
                if (state.firstCalc) {
                    sum = resNum * currNum; 
                    if (typeof state.result === 'string') {
                        result = state.currentItem;
                    } else {
                        result = state.result;
                    }
                    return {
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: 'x'
                    }    
                } else {
                    if (state.operatorSymbol === '+') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === '-') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === 'x') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/') {
                        sum = resNum / currNum;
                    }
                    return {
                        result: sum,
                        currentItem: '',
                        displayNum: sum,
                        firstCalc: state.firstCalc,
                        operatorSymbol: 'x'
                    }
                }
            } else if (action.symbol === '/') {
                if (state.firstCalc) {
                    sum = resNum / currNum; 
                    if (typeof state.result === 'string') {
                        result = state.currentItem;
                    } else {
                        result = state.result;
                    }
                    return {
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: '/'
                    }    
                } else {
                    if (state.operatorSymbol === '+') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === '-') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === 'x') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/') {
                        sum = resNum / currNum;
                    }
                    return {
                        result: sum,
                        currentItem: '',
                        displayNum: sum,
                        firstCalc: state.firstCalc,
                        operatorSymbol: '/'
                    }
                }
            }
        }
        case calcBtns.EQUAL_BUTTON: {
            if (state.operatorSymbol === '+'){
                sum = resNum + currNum;
                opSymbol = '+';
            } else if (state.operatorSymbol === '-') {
                sum = resNum - currNum;
                opSymbol = '-';
            } else if (state.operatorSymbol === 'x') {
                sum = resNum * currNum;
                opSymbol = 'x';
            } else if (state.operatorSymbol === '/') {
                sum = resNum / currNum;
                opSymbol = '/';
            }
            return {
                result: sum,
                currentItem: state.currentItem,
                displayNum: sum,
                firstCalc: true,
                operatorSymbol: opSymbol
            }
        }
        default: 
            return state;
    }
}