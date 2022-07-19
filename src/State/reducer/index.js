import { combineReducers } from "redux";
import userReducer from './userReducer.js';
import budgetReducer from './budgetReducer.js';
import totalBudgetReducer from './totalBudgetReducer.js';

const reducers = combineReducers({
    user:userReducer,
    budget:budgetReducer,
    totalBudget:totalBudgetReducer,
})

export default reducers;