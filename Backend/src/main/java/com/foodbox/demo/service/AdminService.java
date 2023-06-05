package com.foodbox.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.Admin;

@Component
public interface AdminService {
	List<Admin> getAllAdmin();
	Admin addAdmin(Admin admin);
	Admin getByEmail(String email);
	Admin updateAdmin(int id,Admin admin);
	Admin deleteAdmin(int id);
	Admin getById(int id);
}
