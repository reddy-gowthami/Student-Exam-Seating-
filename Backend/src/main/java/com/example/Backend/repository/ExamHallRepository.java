package com.example.Backend.repository;

import com.example.Backend.entity.ExamHall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamHallRepository extends JpaRepository<ExamHall, Long> {

    // find by hall name
    ExamHall findByHallName(String hallName);
}