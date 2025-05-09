package com.softwaretich.product_service.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@DiscriminatorValue("HARDWARE")
@Data @NoArgsConstructor @AllArgsConstructor
@SuperBuilder
public class Hardware extends Product {
    private double prix;
    private int nombre_vue;
    
    @Lob
    private byte[] photo; 
}
