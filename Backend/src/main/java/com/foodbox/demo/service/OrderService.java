package com.foodbox.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.Order;

@Component
public interface OrderService {
	Order addOrders(Order order);
	List<Order> getAllOrders();
	Order updateStatus(Order order);
}
