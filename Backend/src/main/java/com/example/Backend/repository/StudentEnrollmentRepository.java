package com.example.Backend.repository;

import com.example.Backend.entity.StudentEnrollment;
import com.example.Backend.entity.User;
import com.example.Backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StudentEnrollmentRepository extends JpaRepository<StudentEnrollment, Long> {

    // Get all students enrolled in a course
    List<StudentEnrollment> findByCourse(Course course);

    // Check if student already enrolled
    boolean existsByStudentAndCourse(User student, Course course);

    // Get courses of a student
    List<StudentEnrollment> findByStudent(User student);
}