import { combineReducers, createStore } from 'redux'
import employeeReducer from '../features/createEmployee'


const reducer = combineReducers({
    employee: employeeReducer
})

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le résultat de cette fonction en parametre de createStore
const store = createStore(reducer, reduxDevtools)

export default store