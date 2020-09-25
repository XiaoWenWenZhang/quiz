package com.twuc.shopping.repository;

import com.twuc.shopping.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
