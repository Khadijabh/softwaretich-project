package com.softwaretich.auth_service.security.jwt;

import java.util.Date;

import javax.crypto.SecretKey;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private int jwtExpirationMs;

    // Méthode pour générer un token JWT
    public String generateJwtToken(Authentication authentication) {
        UserDetails userPrincipal = (UserDetails) authentication.getPrincipal();

        // Construction du token avec les informations de l'utilisateur
        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())  // Le nom d'utilisateur
                .setIssuedAt(new Date())  // Date de création
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))  // 1 jour
                .signWith(SECRET_KEY)
                .compact();
    }

    // Méthode pour extraire le nom d'utilisateur du token
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Méthode pour valider le token JWT
    public boolean validateJwtToken(String authToken) {
        try {
            // Tenter de parser le token et vérifier sa validité
            Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(authToken);
            return true;  // Si tout est ok, retourner vrai
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        // Si une exception est levée, retourner faux
        return false;
    }
}