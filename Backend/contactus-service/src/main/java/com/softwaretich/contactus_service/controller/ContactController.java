package com.softwaretich.contactus_service.controller;

import com.softwaretich.contactus_service.entity.ContactMessage;
import com.softwaretich.contactus_service.repository.ContactMessageRepository;


import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final JavaMailSender mailSender;
    private final ContactMessageRepository repository;

    public record ContactRequest(
        @NotBlank(message = "Le nom est obligatoire")
        String name,

        @NotBlank(message = "L'email est obligatoire")
        @Email(message = "L'email doit être valide")
        String email,

        @NotBlank(message = "Le sujet est obligatoire")
        String subject,

        @NotBlank(message = "Le message est obligatoire")
        String message
    ) {}
    
    @Transactional
    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@Valid @RequestBody ContactRequest request) {
        try {
            String sanitizedSubject = sanitizeMessage(request.subject());
            String sanitizedMessage = sanitizeMessage(request.message());

            // Enregistrement dans la base de données
            ContactMessage contactMessage = ContactMessage.builder()
                .name(request.name())
                .email(request.email())
                .subject(sanitizedSubject)
                .message(sanitizedMessage)
                .sentAt(LocalDateTime.now())
                .build();
            repository.save(contactMessage);

            // Envoi de l'email
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("softwaretich01@gmail.com");
            mailMessage.setSubject("[" + sanitizedSubject + "] - Message de " + request.name());
            mailMessage.setText("Sujet : " + sanitizedSubject + "\n"
                    + "De : " + request.name() + " (" + request.email() + ")\n\n"
                    + sanitizedMessage);

            mailSender.send(mailMessage);
            return ResponseEntity.ok("Email envoyé et message sauvegardé avec succès.");
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body("Erreur lors de l'envoi de l'email: " + e.getMessage());
        }
    }

    @GetMapping("/all-messages")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/message/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable("id") Long id) {
        Optional<ContactMessage> message = repository.findById(id);
        return message.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/message/{id}")
    public ResponseEntity<String> deleteMessage(@PathVariable("id") Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.ok("Message ID: " + id + " supprimé.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private String sanitizeMessage(String message) {
        return message.replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll("&", "&amp;")
                .replaceAll("\"", "&quot;");
    }
}
