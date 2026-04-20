package com.example.Backend.controller;

import com.example.Backend.entity.Exam;
import com.example.Backend.service.ExamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin("*")
public class ExamController {

    private final ExamService service;

    public ExamController(ExamService service) {
        this.service = service;
    }

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return service.createExam(exam);
    }

    @GetMapping
    public List<Exam> getAllExams() {
        return service.getAllExams();
    }
}