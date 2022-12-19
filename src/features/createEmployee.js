import produce from 'immer'
import { selectEmployee } from '../utils/selector'

const initialState = {
  status: 'void',
  data: []
}

const SEND = 'newEmployee/send'

const newEmployeeSend = (data) => ({ type: SEND, payload: data })


export function fetchOrUpdateEmployee(store, employeeInfo) {
  console.log(employeeInfo)
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
      default:
        return
    }
  })
}