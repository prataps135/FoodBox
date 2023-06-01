package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.demo.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
}
