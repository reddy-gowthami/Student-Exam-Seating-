package com.example.Backend.repository;

import com.example.Backend.entity.User;
import com.example.Backend.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    // Find users by role (ADMIN / STUDENT / FACULTY)
    List<User> findByRole(Role role);

    // Find user by email (for login)
    User findByEmail(String email);

    long countByRole(Role role);
}