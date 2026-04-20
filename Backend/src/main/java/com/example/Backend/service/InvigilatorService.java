package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.repository.*;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InvigilatorService {

    private final InvigilatorAssignmentRepository repo;

    public InvigilatorService(InvigilatorAssignmentRepository repo) {
        this.repo = repo;
    }
    public List<InvigilatorAssignment> getAll() {
        return repo.findAll();
    }

    public InvigilatorAssignment assign(InvigilatorAssignment assignment) {

        List<InvigilatorAssignment> existing =
                repo.findByFaculty(assignment.getFaculty());

        for (InvigilatorAssignment a : existing) {

            if (a.getExam().getExamDate()
                    .equals(assignment.getExam().getExamDate())) {

                if (assignment.getExam().getStartTime()
                        .isBefore(a.getExam().getEndTime()) &&
                    assignment.getExam().getEndTime()
                        .isAfter(a.getExam().getStartTime())) {

                    throw new RuntimeException("Faculty time conflict!");
                }
            }
        }

        

        return repo.save(assignment);
    }
}