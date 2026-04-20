package com.example.Backend.controller;

import com.example.Backend.entity.StudentEnrollment;
import com.example.Backend.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin("*")
public class EnrollmentController {

    private final EnrollmentService service;

    public EnrollmentController(EnrollmentService service) {
        this.service = service;
    }

    @PostMapping
    public StudentEnrollment enroll(@RequestBody StudentEnrollment enrollment) {
        return service.enroll(enrollment);
    }

    @GetMapping
    public List<StudentEnrollment> getAll() {
        return service.getAll();
    }
}