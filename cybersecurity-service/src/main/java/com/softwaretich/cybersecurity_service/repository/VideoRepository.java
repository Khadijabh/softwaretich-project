package com.softwaretich.cybersecurity_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softwaretich.cybersecurity_service.entity.Video;

public interface VideoRepository extends JpaRepository<Video, Long> {
}
