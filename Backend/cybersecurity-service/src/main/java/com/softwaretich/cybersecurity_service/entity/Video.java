package com.softwaretich.cybersecurity_service.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 1000)
    private String description;

    private String category;
    private LocalDate publishedDate;

    private String fileName;
    private String contentType;

    @Lob
    private byte[] data;
}
