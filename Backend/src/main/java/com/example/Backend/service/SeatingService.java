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

            // Generate unique random seat numbers for this hall
            Set<Integer> seatNumbers = new HashSet<>();
            Random random = new Random();
            int numStudentsInHall = Math.min(capacity, students.size() - studentIndex);
            while (seatNumbers.size() < numStudentsInHall) {
                seatNumbers.add(random.nextInt(9999) + 1); // Random number from 1 to 9999
            }
            List<Integer> seatList = new ArrayList<>(seatNumbers);

            while (count < capacity && studentIndex < students.size()) {

                User student = students.get(studentIndex).getStudent();

                if (seatingRepo.findByExamAndStudent(exam, student) != null) {
                    studentIndex++;
                    continue;
                }

                SeatingAllocation allocation = new SeatingAllocation();
                allocation.setExam(exam);
                allocation.setStudent(student);
                allocation.setExamHall(hall);

                String seatNumber = seatList.get(count).toString();

                allocation.setSeatNumber(seatNumber);
                allocation.setAllocationStatus(AllocationStatus.ALLOCATED);

                seatingRepo.save(allocation);

                count++;
                studentIndex++;
            }
        }
    }
}