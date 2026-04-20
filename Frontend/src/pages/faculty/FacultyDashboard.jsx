import React, { useEffect, useState } from "react";
import axios from "axios";

function FacultyDashboard() {

  const userName = "Faculty"; // later from backend

  const [duties, setDuties] = useState([]);

  useEffect(() => {
    fetchDuties();
  }, []);

  const fetchDuties = () => {
    axios.get("http://localhost:8080/api/invigilators/my")
      .then(res => setDuties(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>👤 {userName}</h3>

        <div style={styles.menu}>My Duties</div>
      </div>

      {/* Right Side */}
      <div style={styles.right}>

        {/* Header */}
        <div style={styles.header}>
          <h2>Welcome, {userName}</h2>

          <div style={styles.profile}>
            <span style={{ cursor: "pointer" }}>👤 {userName}</span>

            <button
              onClick={() => window.location.href="/"}
              style={styles.logout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.main}>
          <h3>Invigilation Duties</h3>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Hall</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {duties.map((d) => (
                <tr key={d.id}>
                  <td>{d.exam?.course?.courseName}</td>
                  <td>{d.examHall?.hallName}</td>
                  <td>{d.assignmentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
  },

  sidebar: {
    width: "220px",
    backgroundColor: "#1e293b",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  menu: {
    cursor: "pointer",
    padding: "8px",
    borderRadius: "4px",
  },

  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  header: {
    padding: "15px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f8fafc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logout: {
    padding: "6px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },

  main: {
    padding: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default FacultyDashboard;