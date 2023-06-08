package com.foodbox.demo.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	
	@OneToMany
	private List<Cuisine> cuisine;

	public Product() {
		super();
	}

	public Product(@NotNull String name, @NotNull String description, @NotNull int price, @NotNull String imgSource) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgSource = imgSource;
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
