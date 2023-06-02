package com.foodbox.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.demo.model.Product;
import com.foodbox.demo.service.ProductService;

import jakarta.validation.Valid;

@RestController
@Validated
@RequestMapping(value = "/api/v1")
public class ProductController {

	@Autowired
	private ProductService productService;

	@CrossOrigin
	@GetMapping(value = "/product")
	public ResponseEntity<List<Product>> getAllProduct() {
		List<Product> products = productService.getAllProduct();
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(value = "/product")
	public ResponseEntity<Product> addProduct(@Valid @RequestBody Product newProduct) {
		Product product = productService.addProduct(newProduct);
		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value="/product/{pid}")
	public ResponseEntity<Product> getById(@PathVariable int pid){
		Product product = productService.getById(pid);
		return new ResponseEntity<Product>(product,HttpStatus.OK);
	}
	@CrossOrigin
	@PutMapping(value = "/product/{pid}")
	public ResponseEntity<Product> updateProduct(@PathVariable("pid") int pid, @Valid @RequestBody Product product) {
		Product updatedProduct = productService.updateProduct(pid, product);
		return new ResponseEntity<Product>(updatedProduct, HttpStatus.OK);
	}
	
	
}
