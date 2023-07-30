package com.plaza.shopping.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Optional<Product> findByProductId(Long productId);

    List<Product> findAll();

    List<Product> findProductByCategoryId(Long Id);

    List<Product> findProductsByName(String name);
}
