package com.foodbox.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.demo.model.Admin;
import com.foodbox.demo.repository.AdminRepo;
import com.foodbox.demo.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepo adminRepo;
	
	@Override
	public List<Admin> getAllAdmin() {
		List<Admin> admins = adminRepo.findAll();
		return admins;
	}

	@Override
	public Admin addAdmin(Admin admin) {
		return adminRepo.save(admin);
	}

	@Override
	public Admin getByEmail(String email) {
		return adminRepo.findByEmail(email);
	}

	@Override
	public Admin updateAdmin(int id,Admin admin) {
		Admin existingAdmin = adminRepo.findById(id).get();
		if(existingAdmin != null) {
			existingAdmin.setName(admin.getName());
			existingAdmin.setEmail(admin.getEmail());
			existingAdmin.setPassword(admin.getPassword());
			existingAdmin.setPhoneNo(admin.getPhoneNo());
			Admin updatedAdmin = adminRepo.save(existingAdmin);
			return updatedAdmin;
		}
		return admin;
	}
	
	@Override
	public Admin deleteAdmin(int id) {
		Admin admin = adminRepo.findById(id).get();
		if(admin != null) {
			adminRepo.deleteById(id);
		}
		return admin;
	}
	
	@Override
	public Admin getById(int id) {
		Admin admin = adminRepo.findById(id).get();
		return admin;
	}

}
