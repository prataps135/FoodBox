package com.foodbox.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.demo.model.Product;
import com.foodbox.demo.repository.ProductRepo;
import com.foodbox.demo.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepo productRepo;
	
	@Override
	public List<Product> getAllProduct(){
		List<Product> products = productRepo.findAll();
		return products;
	}
	
	@Override
	public Product addProduct(Product newProduct) {
		return productRepo.save(newProduct);
	}
	
	@Override
	public Product updateProduct(int pid, Product product) {
		Product existingProduct = productRepo.findById(pid).get();
		if(existingProduct != null) {
			existingProduct.setName(product.getName());
			existingProduct.setDescription(product.getDescription());
			existingProduct.setImgSource(product.getImgSource());
			existingProduct.setPrice(product.getPrice());
			Product updatedProduct = productRepo.save(existingProduct);
			return updatedProduct;
		}
		return product;
		
	}

	@Override
	public Product getById(int pid) {
		Product product = productRepo.findById(pid).get();
		return product;
	}
}
