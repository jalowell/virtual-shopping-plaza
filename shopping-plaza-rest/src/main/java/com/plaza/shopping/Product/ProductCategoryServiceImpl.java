package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<ProductCategory> findAll(Pageable pageable) {
        return productCategoryDao.findAll(pageable);
    }
}
