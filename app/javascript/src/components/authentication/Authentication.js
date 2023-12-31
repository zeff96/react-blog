import React, { useState } from 'react';
import styles from './Authentication.module.css';
import { useLoginMutation } from '../../redux/api/user/userSlice';
import { setCredentials } from '../../redux/features/authSlice';
import { useAppDispatch } from '../../redux/features/hook';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const canSave = [email, password].every(Boolean) && !isLoading;

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ user: { email, password } }).unwrap();
      dispatch(setCredentials({ user: response.user, token: response.token }));
      clearInputs();
    } catch (err) {
      setError(err?.data?.error);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <span className='error-state'>{error}</span>}
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
      <input
        type='submit'
        value='Log in'
        disabled={!canSave}
        className={styles.btn}
      />
    </form>
  );
};

export default Authentication;
