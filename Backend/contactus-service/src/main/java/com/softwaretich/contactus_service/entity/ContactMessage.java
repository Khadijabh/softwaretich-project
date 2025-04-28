package com.softwaretich.contactus_service.entity;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {

    @NotBlank(message = "Le nom ne peut pas être vide")
    private String name;

    @Email(message = "L'email doit être valide")
    @NotBlank(message = "L'email ne peut pas être vide")
    private String email;

    @NotBlank(message = "Le message ne peut pas être vide")
    private String message;
}