package com.foodbox.demo.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_list")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private long invoiceNo;

	@Column
	private String productName;

	@Column
	private int quantity;

	@Column
	private long amount;

	@Column
	private Date time;

	@Column
	private String status;

	@Column
	private String userName;

	@Column
	private String address;

	public Order() {

	}

	public Order(String productName, long amount, Date time, String status, int quantity, String address,
			String userName,  long invoiceNo) {
		super();
		this.productName = productName;
		this.amount = amount;
		this.time = time;
		this.status = status;
		this.quantity = quantity;
		this.userName = userName;
		this.address = address;
		this.invoiceNo = invoiceNo;
	}

	public int getQuantity() {
		return quantity;
	}

	public String getUserName() {
		return userName;
	}

	public long getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(long invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getId() {
		return id;
	}

}
