package com.foodbox.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.Cuisine;

@Component
public interface CuisineService {
	List<Cuisine> getAllCuisine();
	Cuisine addCuisine(Cuisine cuisine);
}
