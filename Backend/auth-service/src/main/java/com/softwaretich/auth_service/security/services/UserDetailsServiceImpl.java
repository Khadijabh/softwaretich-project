package com.softwaretich.auth_service.security.services;

import com.softwaretich.auth_service.model.User;
import com.softwaretich.auth_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Tentative de chargement de: " + username); 
        
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> {
                System.err.println("UTILISATEUR NON TROUVÉ: " + username);
                return new UsernameNotFoundException("User not found");
            });

        System.out.println("Utilisateur trouvé: " + user.getUsername());
        System.out.println("Roles: " + user.getRoles());

        // Modifié: Retourner UserDetailsImpl au lieu de User
        return UserDetailsImpl.build(user);
    }
}
