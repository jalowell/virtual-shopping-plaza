package com.plaza.shopping.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface ProductDao extends PagingAndSortingRepository<Product, Long> {

    Page<Product> findByCategory_Id(Long Id, Pageable pageable);

    Page<Product> findByNameContaining(String name, Pageable pageable);

    Page<Product> findAll(Pageable pageable);

    Optional<Product> findById(Long id);
}
