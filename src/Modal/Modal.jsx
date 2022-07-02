const Modal = () => {
  return (
    <>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-mdb-backdrop='static'
        data-mdb-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                <i className='fa-solid fa-cart-arrow-down'></i> Item Added to
                Cart Successfully
              </h5>
              <button
                type='button'
                className='btn-close'
                data-mdb-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Please check your Cart
              <i className='fa-solid fa-cart-arrow-down'></i>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-mdb-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
