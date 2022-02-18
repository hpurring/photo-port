import React from 'react';

function Modal({currentPhoto}) {
    const {name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer"></div>
            <h3 className="modalTitle">Photo Name</h3>
            <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            <p>
                {description}
            </p>
            <button type="button">
                Close this modal
            </button>
        </div>


    );
}

export default Modal;