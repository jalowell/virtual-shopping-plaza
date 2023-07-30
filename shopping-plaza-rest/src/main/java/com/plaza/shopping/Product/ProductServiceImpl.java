package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
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
    public List<Product> findAll() {
        return productDao.findAll();
    }

    @Override
    public List<Product> findProductByCategoryId(Long Id) {
        return productDao.findByCategory_Id(Id);
    }

    @Override
    public List<Product> findProductsByName(String name) {
        return productDao.findByNameContaining(name);
    }
}
