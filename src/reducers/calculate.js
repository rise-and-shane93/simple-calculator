import { calcActions, calcBtns, numberBtns } from '../actionTypes/calcActionTypes';

const initialState = {
    result: '',
    currentItem: '',
    displayNum: 0
};

export default function addNum(state=initialState, action) {
    switch(action.type) {
        case numberBtns.NUMBER_BTN: {
            return {
                result: state.result,
                currentItem: state.currentItem += action.num,
                displayNum: state.currentItem
            }
        }
        case calcBtns.ADD_BUTTON: {
            return {
                result: state.currentItem,
                currentItem: '',
                displayNum: state.result
            }
        }
        case calcBtns.EQUAL_BUTTON: {
            let resNum = parseInt(state.result);
            let currNum = parseInt(state.currentItem);
            return {
                result: resNum += currNum,
                currentItem: state.currentItem
            }
        }
        default: 
            return state;
    }
}