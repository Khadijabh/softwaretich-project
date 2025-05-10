package com.softwaretich.auth_service.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.softwaretich.auth_service.model.User;
import com.softwaretich.auth_service.repository.UserRepository;
import com.softwaretich.auth_service.security.services.EncryptionService;

import jakarta.transaction.Transactional; 

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EncryptionService encryptionService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public User registerUser(String nom,String prenom, String email, String password, Set<String> roles) {
        // 1. Vérification doublon
    	if (userRepository.findByEmail(email).isPresent()) {
    	    throw new RuntimeException("Email déjà utilisé");
    	}

        // 2. Préparation de l'utilisateur
        User user = new User();
        user.setNom(nom);
        user.setPrenom(prenom);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setEnabled(true);
        user.setRoles(roles); // Utilise le Set de rôles passé en paramètre

        
        
        // 4. Sauvegarde
        return userRepository.save(user);
    }
}

