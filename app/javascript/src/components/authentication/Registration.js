import React from "react";

const Regsitration = () => {
  return(
    <form>
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