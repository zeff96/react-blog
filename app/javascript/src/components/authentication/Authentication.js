import React, { useState } from 'react';
import './Authentication.css';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const canSave = [email, password].every(Boolean);

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
          value={email}
          placeholder='Enter email'
          autoComplete='email'
          autoFocus
          required
          onChange={onEmailChanged}
          className='form-control'
        />
      </label>
      <label htmlFor='password' className='form-label'>
        Password
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Enter password'
          autoFocus
          required
          onChange={onPasswordChanged}
          className='form-control'
        />
      </label>
      <input type='submit' value='Log in' disabled={!canSave} className='btn' />
    </form>
  );
};

export default Authentication;
