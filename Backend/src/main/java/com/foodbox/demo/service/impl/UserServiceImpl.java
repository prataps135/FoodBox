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

	@Override
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public User updateUser(int id, User user) {
		User existingUser = userRepo.findById(id).get();
		if(existingUser != null) {
			existingUser.setName(user.getName());
			existingUser.setEmail(user.getEmail());
			existingUser.setPassword(user.getPassword());
			existingUser.setPhoneNo(user.getPhoneNo());
			User updatedUser = userRepo.save(existingUser);
			return updatedUser;
		}
		return user;
	}

	@Override
	public User deleteUser(int id) {
		User user = userRepo.findById(id).get();
		if(user != null) {
			userRepo.deleteById(id);
		}
		return user;
	}

	@Override
	public User getById(int id) {
		User user = userRepo.findById(id).get();
		return user;
	}
	
	
}
