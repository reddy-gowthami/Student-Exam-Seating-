package com.example.Backend.entity;

import com.example.Backend.enums.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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

    @NotNull
    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ExamType examType;

    @NotNull
    private LocalDate examDate;
    
    @NotNull
    private LocalTime startTime;
    
    @NotNull
    private LocalTime endTime;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ExamStatus examStatus = ExamStatus.CREATED;

    private LocalDateTime createdAt = LocalDateTime.now();
}