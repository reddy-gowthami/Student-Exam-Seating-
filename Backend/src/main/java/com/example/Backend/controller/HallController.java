package com.example.Backend.controller;

import com.example.Backend.entity.ExamHall;
import com.example.Backend.repository.ExamHallRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
@CrossOrigin("*")
public class HallController {

    private final ExamHallRepository repo;

    public HallController(ExamHallRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public ExamHall createHall(@RequestBody ExamHall hall) {
        return repo.save(hall);
    }

    @GetMapping
    public List<ExamHall> getAllHalls() {
        return repo.findAll();
    }
}