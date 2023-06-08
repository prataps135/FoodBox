package com.foodbox.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.model.Address;
import com.foodbox.demo.service.AddressService;

@RestController
@Validated
@RequestMapping(value="/api/v1")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@CrossOrigin
	@PostMapping(value="/address")
	public ResponseEntity<Address> addAddress(@RequestBody Address address){
		Address newAddress = addressService.addAddress(address);
		return new ResponseEntity<Address>(newAddress,HttpStatus.OK);
	}
}
