package com.example.Backend.repository;

import com.example.Backend.entity.SeatingAllocation;
import com.example.Backend.entity.Exam;
import com.example.Backend.entity.User;
import com.example.Backend.entity.ExamHall;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SeatingAllocationRepository extends JpaRepository<SeatingAllocation, Long> {

    // Get all allocations for an exam
    List<SeatingAllocation> findByExam(Exam exam);

    // Get allocation of a specific student
    SeatingAllocation findByExamAndStudent(Exam exam, User student);

    // Count number of students in a hall
    int countByExamAndExamHall(Exam exam, ExamHall examHall);

    // Get allocations by hall
    List<SeatingAllocation> findByExamHall(ExamHall examHall);
}