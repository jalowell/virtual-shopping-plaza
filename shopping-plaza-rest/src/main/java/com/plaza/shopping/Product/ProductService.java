package com.plaza.shopping.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Optional<Product> findByProductId(Long productId);

    Page<Product> findAll(Pageable pageable);

    Page<Product> findProductByCategoryId(Long Id, Pageable pageable);

    Page<Product> findProductsByName(String name, Pageable pageable);
}
