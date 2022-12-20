import { useStore } from 'react-redux'
import { setModal } from '../features/setModal'
function Modal() {
    const store = useStore()
    return(
        <div className="modal">
            <div className="modal__box">
                <span>Employee Created!</span>
                <div className="modal__box__closeModal" onClick={() => setModal(store)}></div>
            </div>
        </div>
    )
}

export default Modal