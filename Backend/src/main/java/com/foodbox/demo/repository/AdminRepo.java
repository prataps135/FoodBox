package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.demo.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{
	Admin findByEmail(String emial);
}
