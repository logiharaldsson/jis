// import { setGender } from "./user.utils";
import JIS_DATA2 from "../../jis_data2";

const INITIAL_STATE = JIS_DATA2;

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        
        case 'SET_CURRENT_GENDER':
            return {
                ...state,
                currentGender: action.payload

            };
        
        case 'SET_CURRENT_AGE':
            return {
                ...state,
                currentAge: action.payload
            }

        case 'SET_CURRENT_ID':
            return {
                ...state,
                currentId: action.payload
            }

        case 'SET_CURRENT_COUNTER_ARRAY':
            return {
                ...state,
                currentCounterArray: action.payload
            }

        case 'SET_CURRENT_COUNTER_BOX':
            return {
                ...state,
                currentCounterBox: action.payload
            }
        
        case 'ADD_ONE_TO_COUNTER_ARRAY':
            console.log(action.payload, 'action.payload')
            let counter1 = state.currentId;
            let box1 = state.currentCounterBox;
            let newArray1 = [...state.currentCounterArray];
            newArray1[counter1].boxesArray[box1] += 1;
            return {
                ...state,
                currentCounterArray: newArray1

            }
        case 'ADD_FIVE_TO_COUNTER_ARRAY':
            console.log('here')
            let counter2 = state.currentId;
            let box2 = state.currentCounterBox;
            let newArray2 = [...state.currentCounterArray];
            newArray2[counter2].boxesArray[box2] += 5;
            return {
                ...state,
                currentCounterArray: newArray2

            }

        case 'REMOVE_ONE_FROM_COUNTER_ARRAY':
            console.log('here')
            let counter3 = state.currentId;
            let box3 = state.currentCounterBox;
            let newArray3 = [...state.currentCounterArray];
            newArray3[counter3].boxesArray[box3] -= 1;
            return {
                ...state,
                currentCounterArray: newArray3

            }

        case 'PUSH_TO_COUNTER_ARRAY':
            let counter4 = state.currentId;
            let newArray4 = [...state.currentCounterArray];
            newArray4[counter4].boxesArray.push(0);
            return {
                ...state,
                currentCounterArray: newArray4
            }

        default :
        return state;
    }
};

export default userReducer;