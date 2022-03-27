import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './backdrop';

function Todo(param) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteCard(){
        //alert('clicked! ' + param.text);
        setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }
    return (
        <dev className="card">
            <h1> {param.text}</h1>
            <dev>
                <button className="button" onClick={deleteCard}> Delete </button>
            </dev>
            {modalIsOpen &&  <Backdrop onCancel={closeModal}/>}
        {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
        </dev>
        
    );
}
export default Todo;