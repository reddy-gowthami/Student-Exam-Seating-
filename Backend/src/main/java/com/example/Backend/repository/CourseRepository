package com.example.Backend.repository;

import com.example.Backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

    // find by course code
    Course findByCourseCode(String courseCode);
}