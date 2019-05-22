import React from "react";

const ValidatedLoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input name="email" type="text" placeholder="Enter your email" />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default ValidatedLoginForm;
