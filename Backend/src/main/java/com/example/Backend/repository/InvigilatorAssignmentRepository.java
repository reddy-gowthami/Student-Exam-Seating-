package com.example.Backend.repository;

import com.example.Backend.entity.InvigilatorAssignment;
import com.example.Backend.entity.User;
import com.example.Backend.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvigilatorAssignmentRepository extends JpaRepository<InvigilatorAssignment, Long> {

    // Get assignments of a faculty
    List<InvigilatorAssignment> findByFaculty(User faculty);

    // Get assignments for an exam
    List<InvigilatorAssignment> findByExam(Exam exam);

    // Check if faculty already assigned to same exam
    boolean existsByFacultyAndExam(User faculty, Exam exam);
}