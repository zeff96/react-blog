import React from "react";

const Authentication = () => {
  return(
    <form>
      <label htmlFor="email">
        Email
        <input type="email" name="email" placeholder="Enter email" autoComplete="email" autoFocus required className="form-control" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" placeholder="Enter password" autoFocus required className="form-control" />
      </label>
      <input type="submit" value="Log in" className="btn" />
    </form>
  )
}

export default Authentication