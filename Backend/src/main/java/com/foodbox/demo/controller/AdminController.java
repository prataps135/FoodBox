package com.foodbox.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.model.Admin;
import com.foodbox.demo.service.AdminService;

import jakarta.validation.Valid;

@RestController
@Validated
@RequestMapping(value="/api/v1")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@CrossOrigin
	@GetMapping(value="/admin")
	public List<Admin> getAllAdmin(){
		List<Admin> admins = adminService.getAllAdmin();
		return admins;
	}
	
	@CrossOrigin
	@PostMapping(value="/admin")
	public Admin addAdmin(@Valid @RequestBody Admin admin) {
		return adminService.addAdmin(admin);
	}
	
	@CrossOrigin
	@GetMapping(value="/admin/{email}")
	public ResponseEntity<Admin> getByEmail(@PathVariable String email){
		Admin admin = adminService.getByEmail(email);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
}
