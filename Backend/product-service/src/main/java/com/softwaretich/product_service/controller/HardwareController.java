package com.softwaretich.product_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.softwaretich.product_service.model.Hardware;
import com.softwaretich.product_service.repository.HardwareRepository;

import java.util.List;

@RestController
@RequestMapping("/api/hardware")
@RequiredArgsConstructor
public class HardwareController {

    private final HardwareRepository hardwareRepository;

    @GetMapping
    public List<Hardware> getAllHardware() {
        return hardwareRepository.findAll();
    }

    @PostMapping
    public Hardware createHardware(@RequestBody Hardware hardware) {
        return hardwareRepository.save(hardware);
    }

    @GetMapping("/{id}")
    public Hardware getHardwareById(@PathVariable("id") Long id) {
        return hardwareRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Hardware updateHardware(@PathVariable("id") Long id, @RequestBody Hardware updated) {
        return hardwareRepository.findById(id)
                .map(h -> {
                    h.setNom(updated.getNom());
                    h.setDetails(updated.getDetails());
                    h.setPartner(updated.getPartner());
                    h.setCategory_id(updated.getCategory_id());
                    h.setPrix(updated.getPrix());
                    h.setNombre_vue(updated.getNombre_vue());
                    return hardwareRepository.save(h);
                }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteHardware(@PathVariable("id") Long id) {
        hardwareRepository.deleteById(id);
    }
}

