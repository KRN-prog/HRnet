import { combineReducers, createStore } from 'redux'
import employeeReducer from '../features/createEmployee'
import setModalReducer from '../features/setModal'


const reducer = combineReducers({
    employee: employeeReducer,
    setModal: setModalReducer
})

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le résultat de cette fonction en parametre de createStore
const store = createStore(reducer, reduxDevtools)

export default store