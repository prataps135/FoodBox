package com.foodbox.demo.service;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.Address;

@Component
public interface AddressService {
	Address addAddress(Address address);
}
