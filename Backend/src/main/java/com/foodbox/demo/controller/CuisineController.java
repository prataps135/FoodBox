package com.foodbox.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.model.Cuisine;
import com.foodbox.demo.service.CuisineService;

@RestController
@Validated
@RequestMapping(value="/api/v1")
public class CuisineController {
	
	@Autowired
	private CuisineService cuisineService;
	
	@CrossOrigin
	@GetMapping(value="/cuisine")
	public ResponseEntity<List<Cuisine>> getAllCuisine(){
		List<Cuisine> cuisines = cuisineService.getAllCuisine();
		return new ResponseEntity<List<Cuisine>>(cuisines,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value="/cuisine")
	public ResponseEntity<Cuisine> addCuisine(@RequestBody Cuisine cuisine){
		Cuisine newCuisine = cuisineService.addCuisine(cuisine);
		return new ResponseEntity<Cuisine>(newCuisine,HttpStatus.OK);
	}
}
