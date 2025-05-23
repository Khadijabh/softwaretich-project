package com.softwaretich.auth_service.controller;

import com.softwaretich.auth_service.dto.request.LoginRequest;
import com.softwaretich.auth_service.dto.request.SignupRequest;
import com.softwaretich.auth_service.dto.response.JwtResponse;
import com.softwaretich.auth_service.dto.response.MessageResponse;
import com.softwaretich.auth_service.model.User;
import com.softwaretich.auth_service.security.jwt.JwtUtils;
import com.softwaretich.auth_service.security.services.EncryptionService;
import com.softwaretich.auth_service.security.services.UserDetailsImpl;
import com.softwaretich.auth_service.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private EncryptionService encryptionService;
    
    @Autowired
    AuthService authService;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            System.out.println("Attempting authentication for: " + loginRequest.getEmail());

            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(new JwtResponse(
                    jwt,
                    userDetails.getId(),
                    userDetails.getNom(),        
                    userDetails.getPrenom(),    
                    userDetails.getEmail(),
                    roles));

        } catch (Exception e) {
            System.err.println("Authentication error: " + e.getMessage());
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Authentication failed"));
        }
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        Set<String> roles = new HashSet<>();
        roles.add("ROLE_USER");
        
        if (signUpRequest.getRole() != null) {
            roles.add(signUpRequest.getRole());
        }

        User user = authService.registerUser(
                signUpRequest.getNom(),
                signUpRequest.getPrenom(),
                signUpRequest.getEmail(), 
                signUpRequest.getPassword(),
                roles);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        return ResponseEntity.ok(new MessageResponse("Logout successful"));
    }
}
