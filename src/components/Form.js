import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      // add title
      firebase.addNote(value.trim()).then(() => {
        alert.show('New todo has been created', 'success');
      }).catch(() => {
        alert.show('Something went wrong', 'danger');
      })
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
