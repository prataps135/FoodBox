package com.foodbox.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.exception.UserAlreadyExistsException;
import com.foodbox.demo.exception.UserNotFoundException;
import com.foodbox.demo.model.User;
import com.foodbox.demo.service.UserService;

import jakarta.validation.Valid;

@RestController
@Validated
@RequestMapping(value = "/api/v1")
public class UserController {

	@Autowired
	private UserService userService;

	@CrossOrigin
	@GetMapping(value = "/user")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<List<User>>(users,HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(value = "/user")
	public ResponseEntity<User> addUser(@Valid @RequestBody User user) throws Exception{
		String email = user.getEmail();
		if(email != null && !"".equals(email)) {
			User existingUser = userService.getByEmail(email);
			if(existingUser != null) {
				throw new UserAlreadyExistsException();
			}
		}
		User newUser = userService.addUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value = "/user/email/{email}")
	public ResponseEntity<User> getByEmail(@PathVariable String email) throws Exception{
		User user = userService.getByEmail(email);
		if(user == null)
			throw new UserNotFoundException();
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value = "/user/id/{id}")
	public ResponseEntity<User> getById(@PathVariable int id) throws Exception{
		User user = userService.getById(id);
		if(user == null)
			throw new UserNotFoundException();
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(value = "/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
		User updatedUser = userService.updateUser(id, user);
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(value = "/user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable int id) {
		User user = userService.deleteUser(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
