package com.foodbox.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.User;

@Component
public interface UserService {
	List<User> getAllUsers();
	User addUser(User user);
	User getByEmail(String email);
	User updateUser(int id,User user);
	User deleteUser(int id);
	User getById(int id);
}
