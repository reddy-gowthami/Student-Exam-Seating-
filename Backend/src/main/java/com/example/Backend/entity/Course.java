package com.example.Backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "courses")
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String courseCode;
    
    @NotBlank
    private String courseName;
    
    @NotBlank
    private String department;

    private LocalDateTime createdAt = LocalDateTime.now();

}