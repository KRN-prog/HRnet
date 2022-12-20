import produce from 'immer'
import { selectModal } from '../utils/selector'

const initialState = {
  status: 'void',
  showModal: false
}

const SET_MODAL = 'employee/splice'

const set_modal = (data) => ({ type: SET_MODAL, payload: data })


export function setModal(store) {
  const status = selectModal(store.getState()).status
  const modal_status = selectModal(store.getState()).showModal

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(set_modal(!modal_status))
}

export default function setModalReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_MODAL: {
        draft.status = 'resolved'
        draft.showModal = action.payload
        return
      }
      default:
        return
    }
  })
}