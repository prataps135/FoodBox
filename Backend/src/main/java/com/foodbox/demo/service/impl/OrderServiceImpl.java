package com.foodbox.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.demo.model.Order;
import com.foodbox.demo.repository.OrderRepo;
import com.foodbox.demo.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepo orderRepo;
	
	@Override
	public Order addOrders(Order order) {
		return orderRepo.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		List<Order> orders = orderRepo.findAll();
		return orders;
	}

	@Override
	public Order updateStatus(Order order) {
		Order existingOrder = orderRepo.findById(order.getId()).get();
		existingOrder.setStatus(order.getStatus());
		Order updatedOrder = orderRepo.save(existingOrder);
		return updatedOrder;
	}

}
