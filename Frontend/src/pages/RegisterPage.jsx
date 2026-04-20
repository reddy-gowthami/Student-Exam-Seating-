import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "STUDENT",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/users", form);
      alert("User Registered Successfully");
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter Phone Number"
        value={form.phoneNumber}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleChange}
        style={styles.input}
      />

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        style={styles.input}
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button onClick={handleRegister} style={styles.button}>
        Register
      </button>

      <p style={{ textAlign: "center" }}>
  Already registered?{" "}
  <span
    onClick={() => (window.location.href = "/")}
    style={{
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    }}
  >
    Login here
  </span>
</p>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "80px auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  linkButton: {
    padding: "8px",
    backgroundColor: "transparent",
    border: "none",
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default RegisterPage;