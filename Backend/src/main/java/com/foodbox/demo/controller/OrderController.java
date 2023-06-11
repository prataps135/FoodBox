package com.foodbox.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.model.Order;
import com.foodbox.demo.service.OrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="/api/v1")
@Validated
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@CrossOrigin
	@GetMapping(value="/orders")
	public ResponseEntity<List<Order>> getAllOrders(){
		List<Order> orders = orderService.getAllOrders();
		return new ResponseEntity<>(orders,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value="/orders")
	public ResponseEntity<Order> addOrder(@Valid @RequestBody Order order){
		Order newOrder = orderService.addOrders(order);
		return new ResponseEntity<>(newOrder,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PutMapping(value="/orders")
	public ResponseEntity<Order> updateStatus(@Valid @RequestBody Order order){
		Order updatedOrder = orderService.updateStatus(order);
		return new ResponseEntity<Order>(updatedOrder,HttpStatus.OK);
	}
}
