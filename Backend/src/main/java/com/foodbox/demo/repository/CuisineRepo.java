package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.demo.model.Cuisine;

public interface CuisineRepo extends JpaRepository<Cuisine, Integer>{

}
