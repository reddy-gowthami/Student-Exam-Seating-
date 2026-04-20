package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "exam_halls")
@Data
public class ExamHall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String hallName;
    private String building;
    private int seatingCapacity;

    private LocalDateTime createdAt = LocalDateTime.now();
}