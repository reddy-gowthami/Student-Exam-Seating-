package com.example.Backend.entity;

import com.example.Backend.enums.AllocationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "seating_allocations")
@Data
public class SeatingAllocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "exam_id", nullable = false)
    private Exam exam;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private User student;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "hall_id", nullable = false)
    private ExamHall examHall;

    @NotBlank
    private String seatNumber;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AllocationStatus allocationStatus = AllocationStatus.PENDING;

    private LocalDateTime createdAt = LocalDateTime.now();
}