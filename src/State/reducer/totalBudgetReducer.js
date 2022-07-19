const reducer = (state = 0,action) => {

    if(action.type ="SET_TOTAL_BUDGET"){
        return state + action.payload;
    }else{
        return state;
    }

}
export default reducer;