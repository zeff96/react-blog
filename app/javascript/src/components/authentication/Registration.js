import React, { useRef } from "react";

const Regsitration = () => {
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);

    const data = {
      user: { name: form.name, email: form.email, password: form.password, password_confirmation: form.password_confirmation}
    }
  }
  return(
    <form ref={formRef}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" placeholder="Enter name" autoComplete="name" autoFocus required className="form-control" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" placeholder="Enter email" autoComplete="email" autoFocus required className="form-control" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" placeholder="Enter password" autoFocus required className="form-control" />
      </label>
      <label htmlFor="password_confirmation">
        Password Confirmation
        <input type="password" name="password_confirmation" placeholder="Confirm password" autoFocus required className="form-control" />
      </label>
      <input type="submit" value="Sign up" className="btn" />
    </form>
  )
}

export default Regsitration