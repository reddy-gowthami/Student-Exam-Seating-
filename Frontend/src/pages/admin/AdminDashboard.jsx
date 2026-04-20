import React from "react";

function AdminDashboard() {

  const userName = "Admin"; // later from backend

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>👤 {userName}</h3>

        <div style={styles.menu}>Users</div>
        <div style={styles.menu}>Courses</div>
        <div style={styles.menu}>Exams</div>
        <div style={styles.menu}>Halls</div>
        <div style={styles.menu}>Seating</div>
        <div style={styles.menu}>Invigilators</div>

        <button style={styles.logout} onClick={() => window.location.href="/"}>
          Logout
        </button>
      </div>

      {/* Right Side */}
      <div style={styles.right}>

        {/* Header */}
        <div style={styles.header}>
          <h2>Welcome, {userName}</h2>
        </div>

        {/* Main Content */}
        <div style={styles.main}>
          
          {/* Cards */}
          <div style={styles.cards}>
            <div style={styles.card}>Students</div>
            <div style={styles.card}>Courses</div>
            <div style={styles.card}>Exams</div>
            <div style={styles.card}>Halls</div>
          </div>

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

  logout: {
    marginTop: "auto",
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
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
  },

  main: {
    padding: "20px",
  },

  cards: {
    display: "flex",
    gap: "20px",
  },

  card: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default AdminDashboard;