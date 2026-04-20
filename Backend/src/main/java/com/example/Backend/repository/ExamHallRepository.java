package com.example.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Backend.entity.ExamHall;

public interface ExamHallRepository extends JpaRepository<ExamHall, Long> {


    ExamHall findByHallName(String hallName);
}