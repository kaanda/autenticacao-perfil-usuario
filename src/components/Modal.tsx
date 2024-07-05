import '../styles/Modal/Modal.css';
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <button onClick={handleClose} className="modal-button-back">Voltar a tela inicial</button>
            </div>
        </div>
    );
};

export default Modal;
