package com.softwaretich.partner_service.repository;

import com.softwaretich.partner_service.model.Partner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartnerRepository extends JpaRepository<Partner, Long> {
}
