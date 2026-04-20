package com.example.Backend.controller;

import com.example.Backend.entity.StudentEnrollment;
import com.example.Backend.entity.User;
import com.example.Backend.service.EnrollmentService;
import com.example.Backend.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin("*")
public class EnrollmentController {

    private final EnrollmentService service;
    private final UserService userService;

    public EnrollmentController(EnrollmentService service, UserService userService) {
        this.service = service;
        this.userService = userService;
    }

    @PostMapping
    public StudentEnrollment enroll(@RequestParam Long courseId, Authentication authentication) {
        String email = authentication.getName();
        User student = userService.findByEmail(email);
        return service.enroll(student, courseId);
    }

    @GetMapping
    public List<StudentEnrollment> getAll() {
        return service.getAll();
    }
}