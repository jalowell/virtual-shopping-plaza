package com.plaza.shopping.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface ProductCategoryDao extends PagingAndSortingRepository<ProductCategory, Long> {

    Optional<ProductCategory> findById(Long id);
}
