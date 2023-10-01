import React, { useState } from 'react';
import './Authentication.css';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Api.post('/login', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='email' className='form-label'>
        Email
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          autoComplete='email'
          autoFocus
          required
          className='form-control'
        />
      </label>
      <label htmlFor='password' className='form-label'>
        Password
        <input
          type='password'
          name='password'
          placeholder='Enter password'
          autoFocus
          required
          className='form-control'
        />
      </label>
      <input type='submit' value='Log in' disabled={!canSave} className='btn' />
    </form>
  );
};

export default Authentication;
