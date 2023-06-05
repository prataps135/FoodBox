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
	public ResponseEntity<List<Admin>> getAllAdmin(){
		List<Admin> admins = adminService.getAllAdmin();
		return new ResponseEntity<List<Admin>>(admins,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value="/admin")
	public ResponseEntity<Admin> addAdmin(@Valid @RequestBody Admin admin) {
		Admin newAdmin = adminService.addAdmin(admin);
		return new ResponseEntity<Admin>(newAdmin,HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping(value="/admin/email/{email}")
	public ResponseEntity<Admin> getByEmail(@PathVariable String email){
		Admin admin = adminService.getByEmail(email);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping(value="/admin/id/{id}")
	public ResponseEntity<Admin> getById(@PathVariable int id){
		Admin admin = adminService.getById(id);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
	
	@CrossOrigin(originPatterns = "*", allowCredentials = "true", allowedHeaders = "*")
	@PutMapping(value="/admin/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable int id,@RequestBody Admin admin){
		Admin updatedAdmin = adminService.updateAdmin(id, admin);
		return new ResponseEntity<Admin>(updatedAdmin,HttpStatus.OK);
	}
	
	@CrossOrigin
	@DeleteMapping(value="/admin/{id}")
	public ResponseEntity<Admin> deleteAdmin(@PathVariable int id){
		Admin admin = adminService.deleteAdmin(id);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
	
}
