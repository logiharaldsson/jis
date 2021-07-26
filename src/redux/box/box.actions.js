export const setCurrentBox = box => ({
    type: 'SET_CURRENT_BOX',
    payload: box
});

export const addOneToBox = box => ({
    type: 'ADD_ONE_TO_BOX',
    payload: box
});

export const addFiveToBox = box => ({
    type: 'ADD_FIVE_TO_BOX',
    payload: box
});

export const removeOneFromBox = box => ({
    type: 'REMOVE_ONE_FROM_BOX',
    payload: box
});