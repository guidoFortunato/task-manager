import React from 'react';

const FormError = ({error}) => {
  return <div>{error && (<span className="color-errors">{error.message}</span>)}</div>

}

export default FormError;
