package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductDao productDao;
    @Override
    public Optional<Product> findByProductId(Long Id) {
        return productDao.findById(Id);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return productDao.findAll(pageable);
    }

    @Override
    public Page<Product> findProductByCategoryId(Long Id, Pageable pageable) {
        return productDao.findByCategory_Id(Id, pageable);
    }

    @Override
    public Page<Product> findProductsByName(String name, Pageable pageable) {
        return productDao.findByNameContaining(name, pageable);
    }
}
