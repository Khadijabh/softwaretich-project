package com.softwaretich.cybersecurity_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.softwaretich.cybersecurity_service.entity.Video;
import com.softwaretich.cybersecurity_service.repository.VideoRepository;

import java.io.IOException;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/videos")
@RequiredArgsConstructor
public class VideoController {

    private final VideoRepository videoRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadVideo(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("category") String category
    ) throws IOException {
        Video video = Video.builder()
                .title(title)
                .description(description)
                .category(category)
                .publishedDate(LocalDate.now())
                .fileName(file.getOriginalFilename())
                .contentType(file.getContentType())
                .data(file.getBytes())
                .build();

        videoRepository.save(video);
        return ResponseEntity.ok("Vidéo enregistrée avec succès !");
    }

    @GetMapping("/stream/{id}")
    public ResponseEntity<byte[]> streamVideo(@PathVariable Long id) {
        Video video = videoRepository.findById(id).orElseThrow();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=" + video.getFileName())
                .contentType(MediaType.valueOf(video.getContentType()))
                .body(video.getData());
    }
}
