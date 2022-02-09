import React from "react";

const Alert = ({ typeOfAlert, children, show, toggleShow }) => {
  return (
    show &&
    typeOfAlert && (
      <div className={typeOfAlert} role='alert'>
        {children}
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
          onClick={() => toggleShow(false)}
        >
          <span>x</span>
        </button>
      </div>
    )
  );
};

export default Alert;
