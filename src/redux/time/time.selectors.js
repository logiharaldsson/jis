import { createSelector } from "reselect";

// This is to get the state from Redux
const selectTime = state => state.time;

export const selectCurrentTimeLog = createSelector(
    [selectTime],
    (time) => time.currentTimeLog
);