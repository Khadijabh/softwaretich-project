package com.softwaretich.partner_service.controller;

import com.softwaretich.partner_service.model.Partner;
import com.softwaretich.partner_service.repository.PartnerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partners")
@RequiredArgsConstructor
public class PartnerController {
    private final PartnerRepository partnerRepository;

    // Récupérer tous les partenaires
    @GetMapping
    public ResponseEntity<List<Partner>> getAllPartners() {
        return ResponseEntity.ok(partnerRepository.findAll());
    }

    // Créer un nouveau partenaire
    @PostMapping
    public ResponseEntity<Partner> createPartner(@RequestBody Partner partner) {
        return ResponseEntity.ok(partnerRepository.save(partner));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Partner> getPartnerById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(partnerRepository.findById(id).orElseThrow());
    }

    // Supprimer un partenaire
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable("id") Long id) {
        partnerRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Partner> updatePartner(
            @PathVariable("id") Long id, 
            @RequestBody Partner partnerDetails) {
        
        Partner partner = partnerRepository.findById(id)
                .orElseThrow();
        
        partner.setNom(partnerDetails.getNom());
        
        Partner updatedPartner = partnerRepository.save(partner);
        return ResponseEntity.ok(updatedPartner);
    }
}
