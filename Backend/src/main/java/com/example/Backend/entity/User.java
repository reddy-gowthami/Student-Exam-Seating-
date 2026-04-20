package com.example.Backend.entity;

import com.example.Backend.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Data
public class User{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private Role role;
    private LocalDateTime createdAt=LocalDateTime.now();

}