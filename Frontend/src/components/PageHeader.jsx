import React from "react";
import { useNavigate } from "react-router-dom";

function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      <div style={styles.titleWrapper}>
        <button type="button" style={styles.backButton} onClick={() => navigate("/admin")}>\u2190 Back</button>
        <h2 style={styles.title}>{title}</h2>
      </div>
      <button type="button" style={styles.dashboardButton} onClick={() => navigate("/admin")}>Dashboard</button>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  backButton: {
    padding: "8px 12px",
    backgroundColor: "#e2e8f0",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    cursor: "pointer",
  },
  title: {
    margin: 0,
  },
  dashboardButton: {
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default PageHeader;
