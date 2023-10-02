import React, { useRef, useState } from 'react';
import Api from '../../apis/Api';
import './Registration.css';

const Regsitration = () => {
  const [name, setName] = useState('');
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);
    const data = {
      user: {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      },
    };
    try {
      const response = await Api.post('/signup', data, {
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
      <label htmlFor='name' className='form-label'>
        Name
        <input
          type='text'
          name='name'
          placeholder='Enter name'
          autoComplete='name'
          autoFocus
          required
          className='form-control'
        />
      </label>
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
      <label htmlFor='password_confirmation' className='form-label'>
        Password Confirmation
        <input
          type='password'
          name='password_confirmation'
          placeholder='Confirm password'
          autoFocus
          required
          className='form-control'
        />
      </label>
      <input type='submit' value='Sign up' className='btn' />
    </form>
  );
};

export default Regsitration;
