package com.softwaretich.contactus_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.softwaretich.contactus_service.entity.ContactMessage;
import com.softwaretich.contactus_service.service.ContactMessageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageService service;

    @PostMapping
    public ResponseEntity<?> contact(@RequestBody ContactMessage msg) {
        try {
            service.sendMessage(msg);
            return ResponseEntity.ok("Message envoyé avec succès !");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Contenu invalide détecté.");
        }
    }
}
