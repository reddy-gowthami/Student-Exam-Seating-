package com.example.Backend.controller;

public class SeatingAllocationDTO {
    private String studentName;
    private String hallName;
    private String seatNumber;

    public SeatingAllocationDTO(String studentName, String hallName, String seatNumber) {
        this.studentName = studentName;
        this.hallName = hallName;
        this.seatNumber = seatNumber;
    }

    // Getters
    public String getStudentName() { return studentName; }
    public String getHallName() { return hallName; }
    public String getSeatNumber() { return seatNumber; }
}