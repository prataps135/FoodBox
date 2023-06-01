package com.foodbox.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name", unique = false)
	@NotNull
	private String adminName;

	@Column(name = "email", unique = true)
	@NotNull
	private String adminEmail;

	@Column(name = "password", unique = false, nullable = false)
	private String adminPassword;

	@Column(name = "phone_no", unique = true)
	private long adminPhoneNo;

	public Admin() {
		super();
	}

	public Admin(@NotNull String adminName, @NotNull String adminEmail, String adminPassword, long adminPhoneNo) {
		super();
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.adminPhoneNo = adminPhoneNo;
	}

	public int getId() {
		return id;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public long getAdminPhoneNo() {
		return adminPhoneNo;
	}

	public void setAdminPhoneNo(long adminPhoneNo) {
		this.adminPhoneNo = adminPhoneNo;
	}

}
