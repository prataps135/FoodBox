package com.foodbox.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Cuisine {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String cuisineName;
	
	@ManyToOne
	@JoinColumn
	private Product product;

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
