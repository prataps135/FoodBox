package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.demo.model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer>{

}
