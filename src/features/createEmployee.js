import produce from 'immer'
import { selectEmployee } from '../utils/selector'

const initialState = {
  status: 'void',
  data: []
}

const SEND = 'newEmployee/send'

const newEmployeeSend = (data) => ({ type: SEND, payload: data })


export async function fetchOrUpdateEmployee(store, employeeInfo) {
  //console.log(userToken)
  console.log(employeeInfo)
  const status = selectEmployee(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(newEmployeeSend(employeeInfo))
  /*store.dispatch(userFetching())
  if (userToken !== undefined) {
    try{
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        headers: new Headers({
          "Authorization": `Bearer ${userToken}`
        })
      })
      const data = await response.json()
      if(data.status === 200){
        store.dispatch(userResolved(data))
      }else{
        store.dispatch(userRejected("Connexion non authorizé"))
      }
      //console.log(data)
    }catch (error){
      store.dispatch(userRejected(error))
    } 
  }else{
    store.dispatch(userRejected(""))
  }*/
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