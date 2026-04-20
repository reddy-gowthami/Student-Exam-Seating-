package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.enums.ExamStatus;
import com.example.Backend.repository.ExamRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class ExamService {

    private final ExamRepository examRepository;

    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    public Exam createExam(Exam exam) {

        // Prevent overlapping exams for same course
        List<Exam> existingExams = examRepository
                .findByCourseAndExamDate(exam.getCourse(), exam.getExamDate());

        for (Exam e : existingExams) {
            if (exam.getStartTime().isBefore(e.getEndTime()) &&
                exam.getEndTime().isAfter(e.getStartTime())) {
                throw new RuntimeException("Exam time conflict for this course!");
            }
        }

        exam.setExamStatus(ExamStatus.SCHEDULED);
        return examRepository.save(exam);
    }

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }
}