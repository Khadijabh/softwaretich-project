package com.softwaretich.product_service.model;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@DiscriminatorValue("SOFTWARE")
@Data @NoArgsConstructor @AllArgsConstructor
@SuperBuilder
public class Software extends Product {
    private String brand;
    private String model_name;
    private String special_feat;
    private String antenna_type;
    
    @Lob
    private byte[] photo; 
}
