import React, { useState, useEffect } from "react";
import axios from "axios";

function InvigilatorAssignment() {

  const [exams, setExams] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const [form, setForm] = useState({
    examId: "",
    facultyId: "",
    hallId: "",
  });

  // 🔹 Fetch data
  useEffect(() => {
    fetchExams();
    fetchFaculties();
    fetchAssignments();
  }, []);

  const fetchExams = () => {
    axios.get("http://localhost:8080/api/exams")
      .then(res => setExams(res.data))
      .catch(err => console.error(err));
  };

  const fetchFaculties = () => {
    axios.get("http://localhost:8080/api/users?role=FACULTY")
      .then(res => setFaculties(res.data))
      .catch(err => console.error(err));
  };

  const fetchAssignments = () => {
    axios.get("http://localhost:8080/api/invigilators")
      .then(res => setAssignments(res.data))
      .catch(err => console.error(err));
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Assign invigilator
  const handleAssign = async () => {
    if (!form.examId || !form.facultyId) {
      alert("Fill required fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/invigilators", form);
      alert("Assigned successfully");

      fetchAssignments();

      setForm({
        examId: "",
        facultyId: "",
        hallId: "",
      });

    } catch (err) {
      console.error(err);
      alert("Assignment failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Invigilator Assignment</h2>

      {/* ➕ Assign */}
      <div style={styles.form}>

        <select
          name="examId"
          value={form.examId}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Exam</option>
          {exams.map(e => (
            <option key={e.id} value={e.id}>
              {e.course?.courseName}
            </option>
          ))}
        </select>

        <select
          name="facultyId"
          value={form.facultyId}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Faculty</option>
          {faculties.map(f => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>

        <button onClick={handleAssign} style={styles.button}>
          Assign
        </button>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Exam</th>
            <th>Faculty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.exam?.course?.courseName}</td>
              <td>{a.faculty?.name}</td>
              <td>{a.assignmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const styles = {
  container: { padding: "20px" },

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
    backgroundColor: "#dc2626",
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

export default InvigilatorAssignment;