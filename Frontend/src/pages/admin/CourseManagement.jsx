import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";

function CourseManagement() {

  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    courseCode: "",
    courseName: "",
    department: "",
  });

  // 🔹 Fetch courses from backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios.get("http://localhost:8080/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add course (REAL API)
  const handleAddCourse = async () => {
    if (!form.courseCode || !form.courseName) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/courses", form);
      alert("Course added successfully");

      fetchCourses(); // refresh list

      setForm({
        courseCode: "",
        courseName: "",
        department: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to add course");
    }
  };

  return (
    <div style={styles.container}>
      <PageHeader title="Course Management" />

      {/* ➕ Add Course */}
      <div style={styles.form}>
        <input
          name="courseCode"
          placeholder="Course Code"
          value={form.courseCode}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleAddCourse} style={styles.button}>
          Add Course
        </button>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.courseCode}</td>
              <td>{c.courseName}</td>
              <td>{c.department}</td>
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
    backgroundColor: "#2563eb",
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

export default CourseManagement;
