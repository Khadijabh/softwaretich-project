package com.softwaretich.product_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.softwaretich.product_service.model.Software;

@Repository
public interface SoftwareRepository extends JpaRepository<Software, Long> {
}
