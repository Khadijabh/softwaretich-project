package com.softwaretich.product_service.controller;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.softwaretich.product_service.model.Software;
import com.softwaretich.product_service.repository.SoftwareRepository;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/software")
@RequiredArgsConstructor
public class SoftwareController {

    private final SoftwareRepository softwareRepository;

    @GetMapping
    public List<Software> getAllSoftware() {
        return softwareRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createSoftware(
            @RequestParam("nom") String nom,
            @RequestParam("details") String details,
            @RequestParam("partner") String partner,
            @RequestParam("categoryId") Long categoryId,
            @RequestParam("brand") String brand,
            @RequestParam("modelName") String modelName,
            @RequestParam("specialFeat") String specialFeat,
            @RequestParam("antennaType") String antennaType,
            @RequestParam("photo") MultipartFile photoFile
    ) throws IOException {

        Software software = Software.builder()
                .nom(nom)
                .details(details)
                .partner(partner)
                .category_id(categoryId)
                .brand(brand)
                .model_name(modelName)
                .special_feat(specialFeat)
                .antenna_type(antennaType)
                .photo(photoFile.getBytes())
                .build();

        softwareRepository.save(software);
        return ResponseEntity.ok("Software ajouté avec succès !");
    }

    @GetMapping("/{id}")
    public Software getSoftwareById(@PathVariable("id") Long id) {
        return softwareRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Software updateSoftware(@PathVariable("id") Long id, @RequestBody Software updated) {
        return softwareRepository.findById(id)
                .map(s -> {
                    s.setNom(updated.getNom());
                    s.setDetails(updated.getDetails());
                    s.setPartner(updated.getPartner());
                    s.setCategory_id(updated.getCategory_id());
                    s.setBrand(updated.getBrand());
                    s.setModel_name(updated.getModel_name());
                    s.setSpecial_feat(updated.getSpecial_feat());
                    s.setAntenna_type(updated.getAntenna_type());
                    return softwareRepository.save(s);
                }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteSoftware(@PathVariable("id") Long id) {
        softwareRepository.deleteById(id);
    }
}
