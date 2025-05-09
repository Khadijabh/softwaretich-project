package com.softwaretich.auth_service.security.services;

import com.softwaretich.auth_service.model.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nom;  // Remplace 'username' par 'nom'
    private String prenom;  // Ajoute 'prenom'
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    private final EncryptionService encryptionService;

    // Modifie le constructeur pour inclure nom et prenom
    public UserDetailsImpl(Long id, String nom, String prenom, String email, 
            String password, Collection<? extends GrantedAuthority> authorities,
            EncryptionService encryptionService) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.encryptionService = encryptionService;
    }

    // Méthode pour construire l'objet UserDetails à partir de l'entité User
    public static UserDetailsImpl build(User user, EncryptionService encryptionService) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role))
                .collect(Collectors.toList());

        // Utilise nom et prenom plutôt que username
        return new UserDetailsImpl(
                user.getId(),
                user.getNom(),  // Utilise nom de l'utilisateur
                user.getPrenom(),  // Utilise prenom de l'utilisateur
                user.getEmail(),
                user.getPassword(),
                authorities,
                encryptionService);
    }

    // Getter pour le nom
    public String getNom() {
        return nom;
    }

    // Getter pour le prénom
    public String getPrenom() {
        return prenom;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return nom + " " + prenom;  // Combine le nom et prénom si nécessaire pour le `username`
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
