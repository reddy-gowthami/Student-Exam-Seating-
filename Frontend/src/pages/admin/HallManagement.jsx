import React, { useState, useEffect } from "react";
import axios from "axios";

function HallManagement() {

  const [halls, setHalls] = useState([]);

  const [form, setForm] = useState({
    hallName: "",
    building: "",
    seatingCapacity: "",
  });

  // 🔹 Fetch halls from backend
  useEffect(() => {
    fetchHalls();
  }, []);

  const fetchHalls = () => {
    axios.get("http://localhost:8080/api/halls")
      .then((res) => setHalls(res.data))
      .catch((err) => console.error(err));
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add hall (REAL API)
  const handleAddHall = async () => {
    if (!form.hallName || !form.seatingCapacity) {
      alert("Fill required fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/halls", form);
      alert("Hall added successfully");

      fetchHalls(); // refresh list

      setForm({
        hallName: "",
        building: "",
        seatingCapacity: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to add hall");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Hall Management</h2>

      {/* ➕ Add Hall */}
      <div style={styles.form}>
        <input
          name="hallName"
          placeholder="Hall Name"
          value={form.hallName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="building"
          placeholder="Building"
          value={form.building}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="number"
          name="seatingCapacity"
          placeholder="Capacity"
          value={form.seatingCapacity}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleAddHall} style={styles.button}>
          Add Hall
        </button>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hall Name</th>
            <th>Building</th>
            <th>Capacity</th>
          </tr>
        </thead>

        <tbody>
          {halls.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.hallName}</td>
              <td>{h.building}</td>
              <td>{h.seatingCapacity}</td>
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
    backgroundColor: "#f59e0b",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default HallManagement;