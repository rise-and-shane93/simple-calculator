import { calcActions, calcBtns, numberBtns, memoryBtns } from '../actionTypes/calcActionTypes';

const initialState = {
    result: '',
    currentItem: '',
    displayNum: 0,
    firstCalc: true,
    operatorSymbol: '',
    memoryNum: []
};

export default function addNum(state=initialState, action) {
    let resNum = parseFloat(state.result);
    let currNum = parseFloat(state.currentItem);
    let sum;
    let result;
    let opSymbol;
    let percentage;
    let inverse;
    let squareRoot;
    let memoryNumber;
    let memoryArr = state.memoryNum;
    let memorySum;
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
                        ...state,
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: '+'
                    }
                } else {
                    if (state.operatorSymbol === '-' || state.operatorSymbol === '') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === '+' || state.operatorSymbol === '') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === 'x' || state.operatorSymbol === '') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/' || state.operatorSymbol === '') {
                        sum = resNum / currNum;
                    }
                    return {
                        ...state,
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
                        ...state,
                        result: result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc,
                        operatorSymbol: '-'
                    }    
                } else {
                    if (state.operatorSymbol === '+' || state.operatorSymbol === '') {
                        sum = resNum + currNum;
                    } else if (state.operatorSymbol === '-') {
                        sum = resNum - currNum;
                    } else if (state.operatorSymbol === 'x') {
                        sum = resNum * currNum;
                    } else if (state.operatorSymbol === '/') {
                        sum = resNum / currNum;
                    }
                    return {
                        ...state,
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
                        ...state,
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
                        ...state,
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
                        ...state,
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
                        ...state,
                        result: sum,
                        currentItem: '',
                        displayNum: sum,
                        firstCalc: state.firstCalc,
                        operatorSymbol: '/'
                    }
                }
            } else if (action.symbol === '%') {
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        percentage = currNum / 100;
                    } else {
                        percentage = resNum / 100;
                    }
                    return {
                        ...state,
                        result: percentage,
                        currentItem: '',
                        displayNum: percentage,
                        firstCalc: state.firstCalc,
                        operatorSymbol: ''
                    }    
                } else {
                    percentage = currNum / 100;
                    return {
                        ...state,
                        currentItem: percentage, 
                        displayNum: percentage,
                    }
                }
            } else if (action.symbol === '1/x') {
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        inverse = 1 / currNum;
                    } else {
                        inverse = 1 / resNum;
                    }
                    return {
                        ...state,
                        result: inverse,
                        currentItem: '',
                        displayNum: inverse,
                        firstCalc: state.firstCalc,
                        operatorSymbol: ''
                    }    
                } else {
                    inverse = 1 / currNum;
                    return {
                        ...state,
                        currentItem: inverse, 
                        displayNum: inverse,
                    }
                }
            } else if (action.symbol === '√') {
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        squareRoot = Math.sqrt(currNum);
                    } else {
                        squareRoot = Math.sqrt(resNum);
                    }
                    return {
                        ...state,
                        result: squareRoot,
                        currentItem: '',
                        displayNum: squareRoot,
                        firstCalc: state.firstCalc,
                        operatorSymbol: ''
                    }    
                } else {
                    squareRoot = Math.sqrt(currNum);
                    return {
                        ...state,
                        currentItem: squareRoot, 
                        displayNum: squareRoot,
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
                ...state,
                result: sum,
                currentItem: state.currentItem,
                displayNum: sum,
                firstCalc: true,
                operatorSymbol: opSymbol
            }
        }
        case calcActions.POWER_BUTTON: {
            return {
                ...state,
                result: '',
                currentItem: '',
                displayNum: 0,
                firstCalc: true,
                operatorSymbol: ''
            }
        }
        case memoryBtns.MEMORY_BTN: {
            if (action.symbol === 'M+') {
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        memoryNumber = parseFloat(state.currentItem);
                    } else {
                        memoryNumber = parseFloat(state.result);
                    }
                } else {
                    memoryNumber = parseFloat(state.result);
                }
                memoryArr.push(memoryNumber);
                return {
                    ...state,
                    currentItem: '',
                    memoryNum: memoryArr
                }    
            } else if (action.symbol === 'M-') {
                if (state.firstCalc) {
                    if (typeof state.result === 'string') {
                        memoryNumber = parseFloat(state.currentItem) * -1;
                    } else {
                        memoryNumber = parseFloat(state.result) * -1;
                    }
                } else {
                    memoryNumber = parseFloat(state.result) * -1;
                }
                memoryArr.push(memoryNumber);
                return {
                    ...state,
                    currentItem: '',
                    memoryNum: memoryArr
                }    
            } else if (action.symbol === 'MR') {
                memorySum = memoryArr.reduce((acc,el) => {
                    return acc += el;
                }, 0);
                return {
                    ...state,
                    displayNum: memorySum
                }
            } else if (action.symbol === 'MC') {
                return {
                    ...state,
                    displayNum: 0,
                    memoryNum: []
                }
            }
        }
        default: 
            return state;
    }
}