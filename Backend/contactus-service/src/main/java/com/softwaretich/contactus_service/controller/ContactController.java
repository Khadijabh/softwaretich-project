package com.softwaretich.contactus_service.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/send-email")
    public String sendEmail(@RequestParam String name, @RequestParam String email, @RequestParam String message, Model model) {
        // Validation des entrées
        if (!isValidEmail(email)) {
            model.addAttribute("error", "Email invalide.");
            return "contact-form";
        }

        if (name.isEmpty() || message.isEmpty()) {
            model.addAttribute("error", "Nom et message sont obligatoires.");
            return "contact-form";
        }

        // Filtrage des messages (XSS, etc.)
        message = sanitizeMessage(message);

        // Envoi de l'email
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo("ton.email@gmail.com");
            mailMessage.setSubject("Message de " + name);
            mailMessage.setText("Message de " + name + " (" + email + "):\n\n" + message);
            mailSender.send(mailMessage);
            return "email-sent";
        } catch (Exception e) {
            model.addAttribute("error", "Erreur lors de l'envoi du message.");
            return "contact-form";
        }
    }

    // Fonction pour valider un email
    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        return email.matches(emailRegex);
    }

    // Fonction pour filtrer le contenu du message (contre XSS, etc.)
    private String sanitizeMessage(String message) {
        // Remplace les balises HTML et autres caractères spéciaux pour éviter l'injection XSS
        return message.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("&", "&amp;").replaceAll("\"", "&quot;");
    }
}
