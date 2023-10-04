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

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  if (passwordConfirmation !== password) {
    console.log('Password do not match');
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        await createUser({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }).unwrap();
        clearInputs();
      } catch (error) {
        console.log('Failed to save user: ', error);
      }
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
