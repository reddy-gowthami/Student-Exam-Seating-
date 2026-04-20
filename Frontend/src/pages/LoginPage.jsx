import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const user = res.data;

      
      if (user.role === "ADMIN") {
        window.location.href = "/admin";
      } else if (user.role === "STUDENT") {
        window.location.href = "/student";
      } else {
        window.location.href = "/faculty";
      }

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>

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

     <p style={{ textAlign: "center" }}>
  If not registered{" "}
  <span
    onClick={() => (window.location.href = "/register")}
    style={{
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    }}
  >
    Register here
  </span>
</p>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "100px auto",
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
    backgroundColor: "blue",
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

export default LoginPage;