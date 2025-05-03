import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../Assets/email.png';
import padlockIcon from '../Assets/padlock.png';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", loginData);
    alert("Login clicked! 🔐 (Login logic coming soon...)");
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <img src={emailIcon} alt="Email Icon" style={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <img src={padlockIcon} alt="Password Icon" style={styles.icon} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>

      {/* Navigation Buttons */}
      <div style={styles.toggleContainer}>
        <Link to="/register" style={styles.toggleButton}>Sign Up</Link>
        <Link to="/login" style={styles.toggleButton}>Log In</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '60px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    width: '24px',
    marginRight: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px',
  },
  toggleButton: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Login;
