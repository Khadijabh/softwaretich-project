package com.softwaretich.category_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.softwaretich.category_service.model.Category;
import com.softwaretich.category_service.repository.CategoryRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository repository;

    public List<Category> findAll() {
        return repository.findAll();
    }

    public Category findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Category create(Category category) {
        return repository.save(category);
    }

    public Category update(Long id, Category category) {
        category.setId(id);
        return repository.save(category);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
