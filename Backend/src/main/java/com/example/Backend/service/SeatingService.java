package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.enums.AllocationStatus;
import com.example.Backend.repository.*;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class SeatingService {

    private final SeatingAllocationRepository seatingRepo;
    private final StudentEnrollmentRepository enrollmentRepo;
    private final ExamHallRepository hallRepo;

    public SeatingService(SeatingAllocationRepository seatingRepo,
                          StudentEnrollmentRepository enrollmentRepo,
                          ExamHallRepository hallRepo) {
        this.seatingRepo = seatingRepo;
        this.enrollmentRepo = enrollmentRepo;
        this.hallRepo = hallRepo;
    }

    public void allocateSeats(Exam exam) {

        List<StudentEnrollment> students =
                enrollmentRepo.findByCourse(exam.getCourse());

        List<ExamHall> halls = hallRepo.findAll();

        int studentIndex = 0;

        for (ExamHall hall : halls) {

            int capacity = hall.getSeatingCapacity();
            int count = 0;

            while (count < capacity && studentIndex < students.size()) {

                User student = students.get(studentIndex).getStudent();

                // Check already allocated
                if (seatingRepo.findByExamAndStudent(exam, student) != null) {
                    studentIndex++;
                    continue;
                }

                SeatingAllocation allocation = new SeatingAllocation();
                allocation.setExam(exam);
                allocation.setStudent(student);
                allocation.setExamHall(hall);

                String seatNumber = hall.getHallName() + "-" +
                        String.format("%03d", count + 1);

                allocation.setSeatNumber(seatNumber);
                allocation.setAllocationStatus(AllocationStatus.ALLOCATED);

                seatingRepo.save(allocation);

                count++;
                studentIndex++;
            }
        }
    }
}