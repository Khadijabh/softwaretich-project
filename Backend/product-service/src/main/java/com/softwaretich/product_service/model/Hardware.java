package com.softwaretich.product_service.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;

@Entity
@DiscriminatorValue("HARDWARE")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Hardware extends Product {
    private double prix;
    private int nombre_vue;
}
