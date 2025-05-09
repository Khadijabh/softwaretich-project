package com.softwaretich.contactus_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softwaretich.contactus_service.entity.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}

