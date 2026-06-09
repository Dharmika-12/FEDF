function Login({ username, password, handleChange, handleLogin }) {
  return (
    <div>
      <h2>Implement the Login Example</h2>

      <p>
        User Name
        <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </p>

      <p>
        Password
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </p>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;