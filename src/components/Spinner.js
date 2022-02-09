import React from "react";

const Spinner = ({ isLoading }) => {
  return isLoading ? (
    <>
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </>
  ) : (
    ""
  );
};

export default Spinner;
