/*import produce from 'immer'
import { employeesList } from '../utils/selector'

const initialState = {
  status: 'void',
  data: []
}

const SPLICED = 'employee/splice'

const employeeSplice = (data) => ({ type: SPLICED, payload: data })


export function spliceEmployees(store, employees) {
  console.log(employees)
  const status = employeesList(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(employeeSplice(employees))
}

export default function splicedEmployeesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    console.log(state.data)
    console.log(action.payload)
    const newArr = [...action.payload]
    switch (action.type) {
      case SPLICED: {
        draft.data = newArr.splice(0, 10)
        draft.status = 'resolved'
        return
      }
      default:
        return
    }
  })
}*/