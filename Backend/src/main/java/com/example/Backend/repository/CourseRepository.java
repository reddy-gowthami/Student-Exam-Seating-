package com.example.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Backend.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

   
    Course findByCourseCode(String courseCode);
}