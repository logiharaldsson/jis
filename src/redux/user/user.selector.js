import { createSelector } from "reselect";

// This is to get the state from Redux
const selectUser = state => state.user;

export const selectCurrentGender = createSelector(
    [selectUser],
    (user) => user.currentGender
);

export const selectCurrentAge = createSelector(
    [selectUser],
    (user) => user.currentAge
);

export const selectCurrentId = createSelector(
    [selectUser],
    (user) => user.currentId
);

export const selectCurrentCounterArray = createSelector(
    [selectUser],
    (user) => user.currentCounterArray
);

export const selectCurrentCounterBox = createSelector(
    [selectUser],
    (user) => user.currentCounterBox
);

// export const selectCurrentCounter = createSelector(
//     [selectUser],
//     (user) => user.currentCounter
// );