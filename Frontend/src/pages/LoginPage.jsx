import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const user = res.data;

      // redirect based on role
      if (user.role === "ADMIN") {
        window.location.href = "/admin";
      } else if (user.role === "STUDENT") {
        window.location.href = "/student";
      } else {
        window.location.href = "/faculty";
      }

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
  },
};

export default LoginPage;