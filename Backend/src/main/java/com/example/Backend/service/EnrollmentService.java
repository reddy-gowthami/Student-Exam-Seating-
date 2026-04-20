package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.repository.StudentEnrollmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EnrollmentService {

    private final StudentEnrollmentRepository repo;

    public EnrollmentService(StudentEnrollmentRepository repo) {
        this.repo = repo;
    }

    public StudentEnrollment enroll(StudentEnrollment enrollment) {

        if (repo.existsByStudentAndCourse(
                enrollment.getStudent(), enrollment.getCourse())) {
            throw new RuntimeException("Student already enrolled!");
        }

        return repo.save(enrollment);
    }

    public List<StudentEnrollment> getAll() {
        return repo.findAll();
    }
}