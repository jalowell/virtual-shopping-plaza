package com.plaza.shopping.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@RequestMapping("/products")
@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
//@RequestMapping("/products") // TODO Figure out why the CORS policy is blocking the endpoint when using RequestMapping
public class ProductController {

    private final ProductService productService;

    @GetMapping("/products")
    public Page<Product> getProducts(Pageable pageable) {
        return productService.findAll(pageable);
    }

    @GetMapping("/products/id/{id}")
    public Optional<Product> getProductById(@PathVariable final Long id) {
        return productService.findByProductId(id);
    }

    @GetMapping("/products/category/{categoryId}")
    public Page<Product> getProductsByCategoryId(@PathVariable final Long categoryId, Pageable pageable) {
        return productService.findProductByCategoryId(categoryId, pageable);
    }

    @GetMapping("/products/search/{name}")
    public Page<Product> getProductsByName(@PathVariable final String name, Pageable pageable) {
        return productService.findProductsByName(name, pageable);
    }

    // This Method will allow user to enter in the name via the url such as this url:
    // http://localhost:8080/api/shop/products/search/query?name=Mug
    @GetMapping("/products/search/query")
    public Page<Product> getProductsByQueryName(@RequestParam(value = "name", required = true) final String name, Pageable pageable) {
        return productService.findProductsByName(name, pageable);
    }

}
