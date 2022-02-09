import React from "react";

const Form = ({ state, handleChange, fetch, setMethodNr }) => {
  return (
    <>
      <form onSubmit={fetch}>
        <div className='form-group'>
          <label htmlFor='inputEmail'>Skriv in din email address</label>
          <input
            name='email'
            className='form-control'
            id='inputEmail'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputSearchWord'>Sökord</label>
          <input
            name='searchWord'
            type='text'
            className='form-control'
            id='searchWord'
            placeholder='sökord'
            value={state.searchWord}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onClick={() => setMethodNr(1)}
            type='submit'
            className='btn btn-primary'
          >
            Skapa prenumeration
          </button>
          <button
            onClick={() => setMethodNr(2)}
            type='submit'
            className='btn btn-primary'
          >
            Se tidigare prenumerationer
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
