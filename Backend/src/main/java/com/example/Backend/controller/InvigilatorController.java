package com.example.Backend.controller;

import com.example.Backend.entity.InvigilatorAssignment;
import com.example.Backend.service.InvigilatorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invigilators")
@CrossOrigin("*")
public class InvigilatorController {

    private final InvigilatorService service;

    public InvigilatorController(InvigilatorService service) {
        this.service = service;
    }

    @PostMapping
    public InvigilatorAssignment assign(@RequestBody InvigilatorAssignment assignment) {
        return service.assign(assignment);
    }

    @GetMapping
    public List<InvigilatorAssignment> getAll() {
        return service.getAll();
    }
}