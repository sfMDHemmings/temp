import React, { ReactNode } from 'react';

interface ModalOverlayProps {
    children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal?.classList.remove('is-active');
        modal?.querySelector('.modal__video video')?.remove();
    };

    return (
        <div className="modal">
            <div
                className="modal__close"
                onClick={() => closeModal()}
            ></div>
            <div className="modal__inner container">{children}</div>
        </div>
    );
};

export default ModalOverlay;
