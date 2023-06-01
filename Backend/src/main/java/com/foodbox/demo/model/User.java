package com.foodbox.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name", unique = false, nullable = false)
	private String userName;

	@Column(name = "email", unique = true, nullable = false)
	private String userEmail;

	@Column(name = "password", unique = false)
	@NotNull
	private String userPassword;

	@Column(name = "phone_no", unique = true)
	@NotNull
	private long userPhoneNo;

	@Column(name = "address", unique = false, nullable = false)
	private String address;

	public User() {
		super();
	}

	public User(String userName, String email, @NotNull String userPassword, @NotNull long userPhoneNo,
			String address) {
		super();
		this.userName = userName;
		this.userEmail = email;
		this.userPassword = userPassword;
		this.userPhoneNo = userPhoneNo;
		this.address = address;
	}

	public int getId() {
		return this.id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public long getUserPhoneNo() {
		return userPhoneNo;
	}

	public void setUserPhoneNo(long userPhoneNo) {
		this.userPhoneNo = userPhoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
