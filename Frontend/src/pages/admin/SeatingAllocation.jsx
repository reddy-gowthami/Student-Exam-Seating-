import React, { useState, useEffect } from "react";
import axios from "axios";

function SeatingAllocation() {

  const [exams, setExams] = useState([]);
  const [allocations, setAllocations] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");

  // 🔹 Fetch exams from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/exams")
      .then((res) => setExams(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔥 Call backend to allocate seating
  const handleAllocate = async () => {
    if (!selectedExam) {
      alert("Select exam first");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8080/api/seating/allocate/${selectedExam}`
      );

      setAllocations(res.data);

    } catch (err) {
      console.error(err);
      alert("Allocation failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Seating Allocation</h2>

      {/* Select Exam */}
      <select
        value={selectedExam}
        onChange={(e) => setSelectedExam(e.target.value)}
        style={styles.input}
      >
        <option value="">Select Exam</option>
        {exams.map((e) => (
          <option key={e.id} value={e.id}>
            {e.course.courseName}
          </option>
        ))}
      </select>

      <button onClick={handleAllocate} style={styles.button}>
        Allocate Seats
      </button>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Hall</th>
            <th>Seat</th>
          </tr>
        </thead>

        <tbody>
          {allocations.map((a, index) => (
            <tr key={index}>
              <td>{a.studentName}</td>
              <td>{a.hallName}</td>
              <td>{a.seatNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },

  input: {
    padding: "8px",
    marginRight: "10px",
  },

  button: {
    padding: "8px",
    backgroundColor: "#8b5cf6",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },

  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
  },
};

export default SeatingAllocation;