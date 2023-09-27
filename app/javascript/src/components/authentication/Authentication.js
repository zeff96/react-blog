import React, { useRef } from 'react';
import './Authentication.css';
const Authentication = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);

    const data = {
      user: { email: form.email, password: form.password },
    };

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
    <form ref={formRef} className='form' onSubmit={handleSubmit}>
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
      <input type='submit' value='Log in' className='btn' />
    </form>
  );
};

export default Authentication;
