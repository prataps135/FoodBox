package com.foodbox.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.foodbox.demo.model.User;
import com.foodbox.demo.repository.UserRepo;
import com.foodbox.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public List<User> getAllUsers() {
		List<User> users = userRepo.findAll();
		return users;
	}

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}
	
	
}
