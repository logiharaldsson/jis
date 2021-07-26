import { createSelector } from "reselect";

// This is to get the state from Redux
const selectBox = state => state.box;

export const selectCurrentBox = createSelector(
    [selectBox],
    (box) => box.currentBox
)