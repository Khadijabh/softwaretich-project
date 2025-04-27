package com.softwaretich.product_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.softwaretich.product_service.model.Software;
import com.softwaretich.product_service.repository.SoftwareRepository;

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
    public Software createSoftware(@RequestBody Software software) {
        return softwareRepository.save(software);
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
