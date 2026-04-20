import React, { useState, useEffect } from "react";
import axios from "axios";

function ExamManagement() {

  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);

  const [form, setForm] = useState({
    courseId: "",
    examDate: "",
    startTime: "",
    endTime: "",
  });

  // 🔹 Fetch courses + exams
  useEffect(() => {
    fetchCourses();
    fetchExams();
  }, []);

  const fetchCourses = () => {
    axios.get("http://localhost:8080/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  };

  const fetchExams = () => {
    axios.get("http://localhost:8080/api/exams")
      .then((res) => setExams(res.data))
      .catch((err) => console.error(err));
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Create exam (REAL API)
  const handleAddExam = async () => {
    if (!form.courseId || !form.examDate || !form.startTime || !form.endTime) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/exams", form);
      alert("Exam created successfully");

      fetchExams(); // refresh

      setForm({
        courseId: "",
        examDate: "",
        startTime: "",
        endTime: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to create exam");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Exam Management</h2>

      {/* ➕ Create Exam */}
      <div style={styles.form}>

        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.courseName}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="examDate"
          value={form.examDate}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="time"
          name="startTime"
          value={form.startTime}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="time"
          name="endTime"
          value={form.endTime}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleAddExam} style={styles.button}>
          Create Exam
        </button>
      </div>

      {/* 📋 Exam Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>

        <tbody>
          {exams.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.course?.courseName}</td>
              <td>{e.examDate}</td>
              <td>{e.startTime}</td>
              <td>{e.endTime}</td>
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
    backgroundColor: "#16a34a",
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

export default ExamManagement;