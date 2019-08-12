import { calcActions, calcBtns, numberBtns } from '../actionTypes/calcActionTypes';

const initialState = {
    result: '',
    currentItem: '',
    displayNum: 0,
    firstCalc: true
};

export default function addNum(state=initialState, action) {
    switch(action.type) {
        case numberBtns.NUMBER_BTN: {
            return {
                result: state.result,
                currentItem: state.currentItem += action.num,
                displayNum: state.currentItem,
                firstCalc: state.firstCalc
            }
        }
        case calcBtns.ADD_BUTTON: {
            if (state.firstCalc) {
                if (typeof state.result === 'string') {
                    return {
                        result: state.currentItem,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc
                    }        
                } else {
                    return {
                        result: state.result,
                        currentItem: '',
                        displayNum: state.result,
                        firstCalc: !state.firstCalc
                    }    
                }
            } else {
                let resNum = parseInt(state.result);
                let currNum = parseInt(state.currentItem);
                let sum = resNum + currNum;    
                return {
                    result: sum,
                    currentItem: '',
                    displayNum: sum,
                    firstCalc: state.firstCalc
                }    
            }
        }
        case calcBtns.EQUAL_BUTTON: {
            let resNum = parseInt(state.result);
            let currNum = parseInt(state.currentItem);
            let sum = resNum + currNum;
            return {
                result: sum,
                currentItem: state.currentItem,
                displayNum: sum,
                firstCalc: true
            }
        }
        default: 
            return state;
    }
}