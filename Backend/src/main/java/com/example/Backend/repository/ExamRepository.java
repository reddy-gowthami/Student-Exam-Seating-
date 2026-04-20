package com.example.Backend.repository;

import com.example.Backend.entity.Exam;
import com.example.Backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface ExamRepository extends JpaRepository<Exam, Long> {

    // Find exams by course
    List<Exam> findByCourse(Course course);

    // Conflict check (same course + same date + overlapping time)
    List<Exam> findByCourseAndExamDate(Course course, LocalDate examDate);

}