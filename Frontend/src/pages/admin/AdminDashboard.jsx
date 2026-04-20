import React from "react";

function AdminDashboard() {
  const userName = "Admin"; 

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>👤 {userName}</h3>

        <div style={styles.menu} onClick={() => window.location.href="/admin/users"}>
          Users
        </div>

        <div style={styles.menu} onClick={() => window.location.href="/admin/courses"}>
          Courses
        </div>

        <div style={styles.menu} onClick={() => window.location.href="/admin/exams"}>
          Exams
        </div>

        <div style={styles.menu} onClick={() => window.location.href="/admin/halls"}>
          Halls
        </div>

        <div style={styles.menu} onClick={() => window.location.href="/admin/seating"}>
          Seating
        </div>

        <div style={styles.menu} onClick={() => window.location.href="/admin/invigilators"}>
          Invigilators
        </div>
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
