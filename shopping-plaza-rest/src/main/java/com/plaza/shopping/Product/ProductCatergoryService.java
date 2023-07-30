package com.plaza.shopping.Product;

import java.util.List;
import java.util.Optional;

public interface ProductCatergoryService {
    Optional<ProductCategory> findByProductCategoryId(Long Id);

    List<ProductCategory> findAll();


}
