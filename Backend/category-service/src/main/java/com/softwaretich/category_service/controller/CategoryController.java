package com.softwaretich.category_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.softwaretich.category_service.model.Category;
import com.softwaretich.category_service.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService service;

    @GetMapping
    public List<Category> all() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Category get(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Category create(@RequestBody Category category) {
        return service.create(category);
    }

    @PutMapping("/{id}")
    public Category update(@PathVariable Long id, @RequestBody Category category) {
        return service.update(id, category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}