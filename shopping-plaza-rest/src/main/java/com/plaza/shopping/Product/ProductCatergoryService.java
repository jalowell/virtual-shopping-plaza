package com.plaza.shopping.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductCatergoryService {
    Optional<ProductCategory> findByProductCategoryId(Long Id);

    Page<ProductCategory> findAll(Pageable pageable);


}
