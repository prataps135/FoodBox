package com.foodbox.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.demo.model.Cuisine;
import com.foodbox.demo.repository.CuisineRepo;
import com.foodbox.demo.service.CuisineService;

@Service
public class CuisineServiceImpl implements CuisineService{
	
	@Autowired
	private CuisineRepo cuisineRepo;

	@Override
	public List<Cuisine> getAllCuisine() {
		List<Cuisine> cuisines = cuisineRepo.findAll();
		return cuisines;
	}

	@Override
	public Cuisine addCuisine(Cuisine cuisine) {
		return cuisineRepo.save(cuisine);
	}
	
	
}
