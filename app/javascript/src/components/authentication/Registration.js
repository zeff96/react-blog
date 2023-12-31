import React, { useState } from 'react';
import styles from './Registration.module.css';
import { useSignupMutation } from '../../redux/api/user/userSlice';

const Regsitration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [mismatch, setMismatch] = useState(null);
  const [error, setError] = useState(null);

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onPasswordConfirmationChanged = (e) =>
    setPasswordConfirmation(e.target.value);

  const [signup, { isLoading }] = useSignupMutation();

  const canSave =
    [name, email, password, passwordConfirmation].every(Boolean) && !isLoading;

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        if (passwordConfirmation !== password) {
          setMismatch('Password do not match');
          return;
        }

        await signup({
          user: {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        }).unwrap();
        clearInputs();
      } catch (error) {
        setError(error?.data?.error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='name' className={styles['form-label']}>
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
          className={styles['form-control']}
        />
      </label>
      <label htmlFor='email' className={styles['form-label']}>
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
          className={styles['form-control']}
        />
        {error && <span className='email-error-state'>{error}</span>}
      </label>
      <label htmlFor='password' className={styles['form-label']}>
        Password
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Enter password'
          autoFocus
          required
          onChange={onPasswordChanged}
          className={styles['form-control']}
        />
      </label>
      <label htmlFor='password_confirmation' className={styles['form-label']}>
        Password Confirmation
        <input
          type='password'
          name='password_confirmation'
          value={passwordConfirmation}
          placeholder='Confirm password'
          autoFocus
          required
          onChange={onPasswordConfirmationChanged}
          className={styles['form-control']}
        />
        {mismatch && <span className='mismatch-state'>{mismatch}</span>}
      </label>
      <input
        type='submit'
        value='Sign up'
        disabled={!canSave}
        className={styles.btn}
      />
    </form>
  );
};

export default Regsitration;
