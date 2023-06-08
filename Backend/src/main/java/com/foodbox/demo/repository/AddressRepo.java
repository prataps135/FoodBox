package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.demo.model.Address;

public interface AddressRepo extends JpaRepository<Address, Integer>{

}
