package com.example.Backend.controller;

import com.example.Backend.entity.Exam;
import com.example.Backend.repository.ExamRepository;
import com.example.Backend.repository.SeatingAllocationRepository;
import com.example.Backend.service.SeatingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/seating")
@CrossOrigin("*")
public class SeatingController {

    private final SeatingService service;
    private final ExamRepository examRepo;
    private final SeatingAllocationRepository seatingRepo;

    public SeatingController(SeatingService service,
                             ExamRepository examRepo,
                             SeatingAllocationRepository seatingRepo) {
        this.service = service;
        this.examRepo = examRepo;
        this.seatingRepo = seatingRepo;
    }

    @PostMapping("/allocate/{examId}")
    public String allocate(@PathVariable Long examId) {

        Exam exam = examRepo.findById(examId)
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        service.allocateSeats(exam);
        return "Seats allocated successfully!";
    }

    @GetMapping
    public Object getAllAllocations() {
        return seatingRepo.findAll();
    }
}