const INITIAL_STATE = {
    currentTimeLog: []
};

const timeReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_CURRENT_TIME_LOG':
            let newArray = [...state.currentTimeLog];
            newArray.push(action.payload)
            return{
                ...state,
                currentTimeLog: newArray
            }

        default:
            return state; 
    };
};

export default timeReducer;