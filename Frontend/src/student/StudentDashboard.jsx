import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {

  const userName = "Student"; // later from backend

  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [examDetails, setExamDetails] = useState(null);

  useEffect(() => {
    fetchCourses();
    fetchEnrolledCourses();
  }, []);

  // 🔹 All courses
  const fetchCourses = () => {
    axios.get("http://localhost:8080/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  };

  // 🔹 Enrolled courses
  const fetchEnrolledCourses = () => {
    axios.get("http://localhost:8080/api/enrollments/my")
      .then(res => setEnrolled(res.data))
      .catch(err => console.error(err));
  };

  // 🔹 Click enrolled course → get exam + seating
  const handleCourseClick = async (courseId) => {
    setSelectedCourse(courseId);

    try {
      const examRes = await axios.get(
        `http://localhost:8080/api/exams/course/${courseId}`
      );

      const seatingRes = await axios.get(
        `http://localhost:8080/api/seating/course/${courseId}`
      );

      setExamDetails({
        exam: examRes.data,
        seating: seatingRes.data,
      });

    } catch (err) {
      console.error(err);
      alert("No exam info available");
    }
  };

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>👤 {userName}</h3>

        <div style={styles.menu}>My Courses</div>
      </div>

      {/* Right Side */}
      <div style={styles.right}>

        {/* Header */}
        <div style={styles.header}>
          <h2>Welcome, {userName}</h2>

          <div style={styles.profile}>
            <span>👤 {userName}</span>

            <button
              onClick={() => window.location.href="/"}
              style={styles.logout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main */}
        <div style={styles.main}>

          {/* 📚 Available Courses */}
          <h3>Available Courses</h3>
          <div style={styles.cardContainer}>
            {courses.map(c => (
              <div key={c.id} style={styles.card}>
                {c.courseName}
              </div>
            ))}
          </div>

          {/* 📘 Enrolled Courses */}
          <h3>Enrolled Courses</h3>
          <div style={styles.cardContainer}>
            {enrolled.map(c => (
              <div
                key={c.id}
                style={styles.cardClickable}
                onClick={() => handleCourseClick(c.course.id)}
              >
                {c.course.courseName}
              </div>
            ))}
          </div>

          {/* 📅 Exam + Seating */}
          {examDetails && (
            <div style={styles.examBox}>
              <h3>Exam Details</h3>

              <p><b>Date:</b> {examDetails.exam.examDate}</p>
              <p><b>Time:</b> {examDetails.exam.startTime} - {examDetails.exam.endTime}</p>

              <h4>Seating</h4>
              <p><b>Hall:</b> {examDetails.seating.hallName}</p>
              <p><b>Seat:</b> {examDetails.seating.seatNumber}</p>
            </div>
          )}

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
    padding: "8px",
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
    borderRadius: "4px",
    cursor: "pointer",
  },

  main: {
    padding: "20px",
  },

  cardContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  card: {
    padding: "15px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "6px",
  },

  cardClickable: {
    padding: "15px",
    backgroundColor: "#16a34a",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },

  examBox: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
};

export default StudentDashboard;
