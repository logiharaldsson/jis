const INITIAL_STATE = {
    currentBox : [
        {id: 0,
        boxesArray : [0]}, 
        {id: 1,
        boxesArray : [0]}, 
        {id: 2,
        boxesArray : [0]}, 
        {id: 3,
        boxesArray : [0]}, 
        {id: 4,
        boxesArray : [0]}, 
        {id: 5,
        boxesArray : [0]}, 
        {id: 6,
        boxesArray : [0]}, 
        {id: 7,
        boxesArray : [0]}, 
        {id: 8,
        boxesArray : [0]}, 
        {id: 9,
        boxesArray : [0]}]
}

const boxesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_BOX':
            return {
                ...state,
                currentBox: action.payload
            }
        case 'ADD_ONE_TO_BOX':
            return {
                ...state,
                currentBox: state.currentBox + action.payload
            }
        case 'ADD_FIVE_TO_BOX':
            return {
                ...state,
                currentBox: state.currentBox+5
            }
                
        case 'REMOVE_ONE_FROM_BOX':
            return {
                ...state,
                currentBox: state.currentBox-1
            }

        default:
            return state;
    }
};

export default boxesReducer;