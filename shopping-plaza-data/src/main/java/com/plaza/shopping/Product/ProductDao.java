package com.plaza.shopping.Product;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Long> {

    List<Product> findByCategory_Id(Long Id);

    List<Product> findByNameContaining(String name);
}
