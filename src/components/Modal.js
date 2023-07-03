import React from "react";
import './Modal.css'
import { useSelector } from "react-redux/es/hooks/useSelector";

function Modal({ showModal, closeModal }) {
    const modalItem = useSelector(state => state.ModalItem)

    return (
        <React.Fragment>
            {showModal && modalItem &&
                <div className="modal-container" id="modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-close" onClick={() => closeModal()}>X</div>
                    <div className="modal-image">
                        <img src={modalItem.urlToImage} alt=''/>
                    </div>
                    <div className="modal-heading">
                        <h3>{modalItem.title}</h3>
                    </div>
                    <div className="modal-content">
                        <p>{modalItem.content}</p>
                    </div>
                </div>}
        </React.Fragment>
    )
}
export default Modal