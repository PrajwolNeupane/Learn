export const setUser = (user) => {
    return (dispatch) => {
        dispatch({
            type:"SET_USER",
            payload:user
        });
    }
}
export const setBudget = (budget) => {
    return (dispatch) => {
        dispatch({
            type:"SET_BUDGET",
            payload:budget
        });
    }
}
export const setTotalBudget = (totalBudget) => {
    return (dispatch) => {
        dispatch({
            type:"SET_TOTAL_BUDGET",
            payload:totalBudget
        });
    }
}