package com.foodbox.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.foodbox.demo.model.Product;

@Component
public interface ProductService {
	List<Product> getAllProduct();
	Product addProduct(Product newProduct);
	Product updateProduct(int pid, Product product);
	Product getById(int pid);
}
