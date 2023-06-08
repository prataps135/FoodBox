package com.foodbox.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.demo.model.Address;
import com.foodbox.demo.repository.AddressRepo;
import com.foodbox.demo.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService{

	@Autowired
	private AddressRepo addressRepo;
	
	@Override
	public Address addAddress(Address address) {
		return addressRepo.save(address);
	}

}
