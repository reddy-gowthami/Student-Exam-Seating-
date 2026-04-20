package com.example.Backend.service;

import com.example.Backend.entity.Course;
import com.example.Backend.repository.CourseRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
}