package com.example.Backend.entity;

import com.example.Backend.enums.*;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "exams")
@Data
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Enumerated(EnumType.STRING)
    private ExamType examType;

    private LocalDate examDate;
    private LocalTime startTime;
    private LocalTime endTime;

    @Enumerated(EnumType.STRING)
    private ExamStatus examStatus = ExamStatus.CREATED;

    private LocalDateTime createdAt = LocalDateTime.now();
}