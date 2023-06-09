package com.foodbox.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	
	@Column
	@NotNull
	private String name;
	
	@Column
	@NotNull
	private String description;
	
	@Column
	@NotNull
	private int price;
	
	@Column
	@NotNull
	private String imgSource;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Cuisine cuisine;
	
	@Column(name="counter",nullable=true)
	private int counter;

	public Product() {
		super();
	}

	public Cuisine getCuisine() {
		return cuisine;
	}

	public void setCuisine(Cuisine cuisine) {
		this.cuisine = cuisine;
	}

	public Product(@NotNull String name, @NotNull String description, @NotNull int price, @NotNull String imgSource,int counter) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgSource = imgSource;
		this.counter = counter;
	}

	public int getCounter() {
		return counter;
	}

	public void setCounter(int counter) {
		this.counter = counter;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImgSource() {
		return imgSource;
	}

	public void setImgSource(String imgSource) {
		this.imgSource = imgSource;
	}

	public int getPid() {
		return pid;
	}
	
}
