package com.example.Backend.entity;

import com.example.Backend.enums.AssignmentStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name ="invigilator_assignments")
@Data
public class InvigilatorAssignment{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="exam_id",nullable=false)
    private Exam exam;

    @ManyToOne
    @JoinColumn(name="faculty_id",nullable=false)
    private User faculty;

    @ManyToOne
    @JoinColumn(name="hall_id",nullable=false)
    private ExamHall examHall;

    @Enumerated(EnumType.STRING)
    private AssignmentStatus assignmentStatus=AssignmentStatus.ASSIGNED;

    private LocalDateTime assignedAt=LocalDateTime.now();
}