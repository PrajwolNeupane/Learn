const reducer = (state = {loading:true,data:[]}, action) => {

    if(action.type === "SET_BUDGET"){
        return {
            loading:false,
            data:action.payload
        }
    }else{
        return state;
    }

}
export default reducer;