package com.example.Backend.controller;

import com.example.Backend.entity.Exam;
import com.example.Backend.entity.SeatingAllocation;
import com.example.Backend.repository.ExamRepository;
import com.example.Backend.repository.SeatingAllocationRepository;
import com.example.Backend.service.SeatingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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
    public List<SeatingAllocationDTO> allocate(@PathVariable Long examId) {

        Exam exam = examRepo.findById(examId)
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        service.allocateSeats(exam);

        List<SeatingAllocation> allocations = seatingRepo.findByExam(exam);

        return allocations.stream()
                .map(a -> new SeatingAllocationDTO(
                        a.getStudent().getName(),
                        a.getExamHall().getHallName(),
                        a.getSeatNumber()
                ))
                .collect(Collectors.toList());
    }

    @GetMapping
    public Object getAllAllocations() {
        return seatingRepo.findAll();
    }
}