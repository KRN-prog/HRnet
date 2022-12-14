import produce from 'immer'
import { selectEmployee } from '../utils/selector'

const initialState = {
  status: 'void',
  data: []
}

const SEND = 'newEmployee/send'
const UPDATE = 'newEmployee/Send'

const newEmployeeSend = (data) => ({ type: SEND, payload: data })
const newEmployeeUpdate = (data) => ({ type: UPDATE, payload: data })


export function fetchOrUpdateEmployee(store, employeeInfo) {
  const status = selectEmployee(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(newEmployeeUpdate(employeeInfo))
}
export function fetchOrCreateEmployee(store, employeeInfo) {
  const status = selectEmployee(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(newEmployeeSend(employeeInfo))
}

export default function employeeReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEND: {
        draft.data = [...state.data, action.payload]
        draft.status = 'resolved'
        return
      }
      case UPDATE:
        draft.data = action.payload
        draft.status = 'resolved'
        break
      default:
        return
    }
  })
}