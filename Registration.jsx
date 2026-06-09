function Registration({ formData, handleChange, handleRegister }) {
  return (
    <div>
      <h2>Registration</h2>

      <p>
        User Name :
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </p>

      <p>
        Mobile :
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </p>

      <p>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </p>

      <p>
        Address :
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </p>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registration;