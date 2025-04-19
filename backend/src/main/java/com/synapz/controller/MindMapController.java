package com.synapz.controller;

import com.synapz.model.MindMap;
import com.synapz.service.MindMapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mindmap")
@RequiredArgsConstructor
public class MindMapController {
    
    private final MindMapService mindMapService;
    
    @GetMapping
    public ResponseEntity<List<MindMap>> getPublicMindMaps() {
        return ResponseEntity.ok(mindMapService.getPublicMindMaps());
    }
    
    @GetMapping("/my-mindmaps")
    public ResponseEntity<List<MindMap>> getUserMindMaps(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(mindMapService.getUserMindMaps(userDetails.getUsername()));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<MindMap> getMindMap(@PathVariable String id) {
        return ResponseEntity.ok(mindMapService.getMindMap(id));
    }
    
    @PostMapping
    public ResponseEntity<MindMap> createMindMap(
            @RequestBody MindMap mindMap,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(mindMapService.createMindMap(mindMap, userDetails.getUsername()));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<MindMap> updateMindMap(
            @PathVariable String id,
            @RequestBody MindMap mindMap,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(mindMapService.updateMindMap(id, mindMap, userDetails.getUsername()));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMindMap(
            @PathVariable String id,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        mindMapService.deleteMindMap(id, userDetails.getUsername());
        return ResponseEntity.ok().build();
    }
} 