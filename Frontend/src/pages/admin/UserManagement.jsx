import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";

function UserManagement() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "STUDENT",
  });

  // 🔹 Fetch users from backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:8080/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add user (REAL API)
  const handleAddUser = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Fill all required fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/users", form);
      alert("User added successfully");

      fetchUsers(); // refresh list

      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "STUDENT",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to add user");
    }
  };

  // 🔹 Filter logic
  const filteredUsers =
    filter === "ALL"
      ? users
      : users.filter((u) => u.role === filter);

  return (
    <div style={styles.container}>
      <PageHeader title="User Management" />

      {/* ➕ Create User */}
      <div style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="phoneNumber"
          placeholder="Phone"
          value={form.phoneNumber}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
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
        </select>

        <button onClick={handleAddUser} style={styles.button}>
          Add User
        </button>
      </div>

      {/* 🔍 Filter */}
      <div style={styles.filter}>
        <label>Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="ALL">All</option>
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phoneNumber}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  input: {
    padding: "8px",
  },

  button: {
    padding: "8px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },

  filter: {
    marginBottom: "10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default UserManagement;
