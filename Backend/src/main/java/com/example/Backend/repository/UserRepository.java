package com.example.Backend.repository;

import com.example.Backend.entity.User;
import com.example.Backend.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Find users by role (ADMIN / STUDENT / FACULTY)
    List<User> findByRole(Role role);

    // Find user by email (for login)
<<<<<<< HEAD
    User findByEmail(String email);

    long countByRole(Role role);
=======
    Optional<User> findByEmail(String email);
>>>>>>> 5a46ab4eb2fae2ce31d282772a60f8ccbad32735
}