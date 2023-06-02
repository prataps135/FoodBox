package com.foodbox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.demo.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>{

}
