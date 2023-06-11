package com.foodbox.demo.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Cuisine {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private String cuisineName;
	
//	@OneToMany
//	@JoinColumn(name="product_id")
//	private List<Product> product;
	
	public Cuisine() {
		
	}

	public Cuisine(String cuisineName) {
		super();
		this.cuisineName = cuisineName;
	}

	public String getCuisineName() {
		return cuisineName;
	}

	public void setCuisineName(String cuisineName) {
		this.cuisineName = cuisineName;
	}

	public int getId() {
		return id;
	}
	
	
}
