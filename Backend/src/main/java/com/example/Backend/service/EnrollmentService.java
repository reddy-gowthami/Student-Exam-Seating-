package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.repository.CourseRepository;
import com.example.Backend.repository.StudentEnrollmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EnrollmentService {

    private final StudentEnrollmentRepository repo;
    private final CourseRepository courseRepo;

    public EnrollmentService(StudentEnrollmentRepository repo, CourseRepository courseRepo) {
        this.repo = repo;
        this.courseRepo = courseRepo;
    }

    public StudentEnrollment enroll(User student, Long courseId) {
        Course course = courseRepo.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        if (repo.existsByStudentAndCourse(student, course)) {
            throw new RuntimeException("Student already enrolled!");
        }

        StudentEnrollment enrollment = new StudentEnrollment();
        enrollment.setStudent(student);
        enrollment.setCourse(course);
        return repo.save(enrollment);
    }

    public List<StudentEnrollment> getAll() {
        return repo.findAll();
    }
}