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

import java.util.ArrayList;
import java.util.stream.Collectors;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EncryptionService encryptionService;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameHash) throws UsernameNotFoundException { 
        User user = userRepository.findByUsernameHash(usernameHash)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        
        if (user.getUsernameHash() == null || !user.getUsernameHash().equals(usernameHash)) {
            throw new UsernameNotFoundException("Invalid credentials");
        }

        return UserDetailsImpl.build(user, encryptionService);
    }
}
   



