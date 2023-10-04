import React, { useState } from 'react';
import Api from '../../apis/Api';
import './Registration.css';
import { useCreateUserMutation } from '../../redux/api/apiSlice';

const Regsitration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onPasswordConfirmationChanged = (e) =>
    setPasswordConfirmation(e.target.value);

  const [createUser, { isLoading }] = useCreateUserMutation();

  const canSave =
    [name, email, password, passwordConfirmation].every(Boolean) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='name' className='form-label'>
        Name
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Enter name'
          autoComplete='name'
          autoFocus
          required
          onChange={onNameChanged}
          className='form-control'
        />
      </label>
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
      <label htmlFor='password_confirmation' className='form-label'>
        Password Confirmation
        <input
          type='password'
          name='password_confirmation'
          value={passwordConfirmation}
          placeholder='Confirm password'
          autoFocus
          required
          onChange={onPasswordConfirmationChanged}
          className='form-control'
        />
      </label>
      <input
        type='submit'
        value='Sign up'
        disabled={!canSave}
        className='btn'
      />
    </form>
  );
};

export default Regsitration;
