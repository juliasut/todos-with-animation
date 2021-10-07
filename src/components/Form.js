import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      //...
      alert.show('New todo has been created', 'success');
      // clear the input field
      setValue('');
    } else {
      // shows as 'warning' by default
      alert.show('Enter your todo');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your todo note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
