package com.example.Backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "exam_halls")
@Data
public class ExamHall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String hallName;
    
    @NotBlank
    private String building;
    
    @Min(1)
    private int seatingCapacity;

    private LocalDateTime createdAt = LocalDateTime.now();
}