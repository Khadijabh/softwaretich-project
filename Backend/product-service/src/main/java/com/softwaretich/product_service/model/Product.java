package com.softwaretich.product_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String details;

    // Champ pour savoir si c'est un produit HARDWARE ou SOFTWARE
    @Enumerated(EnumType.STRING)
    private ProductType type;

    // Champs communs et spécifiques
    private Double prix;           // Pour hardware
    private Integer nombre_vue;    // Pour hardware

    private String brand;          // Pour software
    private String model_name;
    private String special_feat;
    private String antenna_type;

    @Lob
    private byte[] photo;
}
