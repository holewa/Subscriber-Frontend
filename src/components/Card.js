import React from "react";

const Card = ({ children, removeItem }) => {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    children.length > 0 && (
      <div className='card' style={{ width: "18rem" }}>
        <div className='card-header' style={myStyle}>
          Tidigare sökningar:
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='toast'
          ></button>
        </div>
        <div className='toast-body'>
          <ul list-style='none' className='list-group list-group-flush'>
            {children.map((searchWord) => (
              <li key={searchWord} className='list-group-item' style={myStyle}>
                {searchWord}
                <button
                  onClick={() => {
                    removeItem(searchWord);
                  }}
                  type='button'
                  className='btn-close'
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Card;
