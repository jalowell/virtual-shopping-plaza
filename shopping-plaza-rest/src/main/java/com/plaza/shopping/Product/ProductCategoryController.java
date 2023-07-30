package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
// TODO Figure out why the CORS policy is blocking the endpoint when using RequestMapping
//@RequestMapping("product-category")
public class ProductCategoryController {
    private final ProductCatergoryService productCatergoryService;
    private final ProductService productService;

    @GetMapping("/product-category")
    public List<ProductCategory> getProductCategories() {
        return productCatergoryService.findAll();
    }

    @GetMapping("/product-category/{Id}")
    public Optional<ProductCategory> getProductCategoryById(@PathVariable final long Id) {
        return productCatergoryService.findByProductCategoryId(Id);
    }
}
