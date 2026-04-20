package com.example.Backend.controller;

import com.example.Backend.entity.Course;
import com.example.Backend.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin("*")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return service.createCourse(course);
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return service.getAllCourses();
    }
}