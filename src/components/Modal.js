function Modal(param){

    function cancelHandler(){
        param.onCancel();
    }
    function confirmHandler(){
        param.onConfirm();
    }
    return(
        <dev className='modal'>
            <p> Are you sure?</p>
            <button className="button buttom--alt" onClick={cancelHandler}>cancel</button>
            <button className="button" onClick={confirmHandler}>confirm</button>
        </dev>
    );
}

export default Modal;