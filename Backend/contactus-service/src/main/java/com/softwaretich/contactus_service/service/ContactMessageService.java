package com.softwaretich.contactus_service.service;

import java.time.LocalDateTime;
import java.util.Arrays;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.softwaretich.contactus_service.entity.ContactMessage;
import com.softwaretich.contactus_service.repository.ContactMessageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository repository;
    private final JavaMailSender mailSender;

    public void sendMessage(ContactMessage msg) {
       
        if (containsMaliciousContent(msg)) {
            throw new IllegalArgumentException("Message contains invalid content");
        }

        msg.setSentAt(LocalDateTime.now());
        repository.save(msg);

        sendEmailToTeam(msg);
    }

    private boolean containsMaliciousContent(ContactMessage msg) {
        String[] blacklist = {"<script>", "DROP TABLE", "SELECT *", "--", "http://badsite.com"};
        String full = msg.getMessage().toLowerCase();
        return Arrays.stream(blacklist).anyMatch(full::contains);
    }

    private void sendEmailToTeam(ContactMessage msg) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("support@tonentreprise.com");
        message.setSubject("Contact Us - " + msg.getSubject());
        message.setText("From: " + msg.getName() + " (" + msg.getEmail() + ")\n\nMessage:\n" + msg.getMessage());
        mailSender.send(message);
    }
}

