import React from 'react';

const Error = (props) => (
   props.error && props.error.length ?
      <div className="error">
         <div className="red">{props.error}</div>
      </div>
      : null
);

export default Error;