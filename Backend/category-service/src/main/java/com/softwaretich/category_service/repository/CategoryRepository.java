package com.softwaretich.category_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softwaretich.category_service.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
