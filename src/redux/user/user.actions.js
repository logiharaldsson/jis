export const setCurrentGender = gender => ({
    type: 'SET_CURRENT_GENDER',
    payload: gender
});

export const setCurrentAge = age => ({
    type: 'SET_CURRENT_AGE',
    payload: age
});

export const setCurrentId = counter => ({
    type: 'SET_CURRENT_ID',
    payload: counter
});

export const setCurrentCounterArray = counterArray => ({
    type: 'SET_CURRENT_COUNTER_ARRAY',
    payload: counterArray
});

export const setCurrentCounterBox = counterBox => ({
    type: 'SET_CURRENT_COUNTER_BOX',
    payload: counterBox
});

export const addOneToCounterArray = counterArray => ({
    type: 'ADD_ONE_TO_COUNTER_ARRAY',
    payload: counterArray
});

export const addFiveToCounterArray = counterArray => ({
    type: 'ADD_FIVE_TO_COUNTER_ARRAY',
    payload: counterArray
});

export const removeOneFromCounterArray = counterArray => ({
    type: 'REMOVE_ONE_FROM_COUNTER_ARRAY',
    payload: counterArray
});

export const pushToCounterArray = counterArray => ({
    type: 'PUSH_TO_COUNTER_ARRAY',
    payload: counterArray
});


