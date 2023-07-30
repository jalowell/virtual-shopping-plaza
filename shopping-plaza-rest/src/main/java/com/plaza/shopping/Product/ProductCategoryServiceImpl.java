package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductCategoryServiceImpl implements ProductCatergoryService {

    private final ProductCategoryDao productCategoryDao;

    @Override
    public Optional<ProductCategory> findByProductCategoryId(Long Id) {
        return productCategoryDao.findById(Id);
    }

    @Override
    public List<ProductCategory> findAll() {
        return productCategoryDao.findAll();
    }
}
