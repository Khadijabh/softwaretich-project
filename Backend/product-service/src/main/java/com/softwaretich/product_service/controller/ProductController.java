package com.softwaretich.product_service.controller;

import com.softwaretich.product_service.model.Product;
import com.softwaretich.product_service.model.ProductType;
import com.softwaretich.product_service.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @GetMapping("/type/{type}")
    public List<Product> getProductsByType(@PathVariable("type") ProductType type) {
        return productRepository.findAll()
                .stream()
                .filter(p -> p.getType() == type)
                .collect(Collectors.toList());
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        productRepository.deleteById(id);
    }
}
