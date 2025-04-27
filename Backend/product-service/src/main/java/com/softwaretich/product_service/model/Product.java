package com.softwaretich.product_service.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "product_type")
@Data @NoArgsConstructor @AllArgsConstructor 
public abstract class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String details;
    private String partner;
    private Long category_id;
}
