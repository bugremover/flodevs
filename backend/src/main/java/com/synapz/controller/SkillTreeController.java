package com.synapz.controller;

import com.synapz.model.SkillTree;
import com.synapz.service.SkillTreeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skilltree")
@RequiredArgsConstructor
public class SkillTreeController {
    
    private final SkillTreeService skillTreeService;
    
    @GetMapping
    public ResponseEntity<List<SkillTree>> getPublicSkillTrees() {
        return ResponseEntity.ok(skillTreeService.getPublicSkillTrees());
    }
    
    @GetMapping("/my-skilltrees")
    public ResponseEntity<List<SkillTree>> getUserSkillTrees(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(skillTreeService.getUserSkillTrees(userDetails.getUsername()));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<SkillTree> getSkillTree(@PathVariable String id) {
        return ResponseEntity.ok(skillTreeService.getSkillTree(id));
    }
    
    @PostMapping
    public ResponseEntity<SkillTree> createSkillTree(
            @RequestBody SkillTree skillTree,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(skillTreeService.createSkillTree(skillTree, userDetails.getUsername()));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<SkillTree> updateSkillTree(
            @PathVariable String id,
            @RequestBody SkillTree skillTree,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(skillTreeService.updateSkillTree(id, skillTree, userDetails.getUsername()));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSkillTree(
            @PathVariable String id,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        skillTreeService.deleteSkillTree(id, userDetails.getUsername());
        return ResponseEntity.ok().build();
    }
} 