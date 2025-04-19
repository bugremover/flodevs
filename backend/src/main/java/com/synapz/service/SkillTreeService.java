package com.synapz.service;

import com.synapz.model.SkillTree;
import com.synapz.model.User;
import com.synapz.repository.SkillTreeRepository;
import com.synapz.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillTreeService {
    
    private final SkillTreeRepository skillTreeRepository;
    private final UserRepository userRepository;
    
    public List<SkillTree> getPublicSkillTrees() {
        return skillTreeRepository.findByIsPublic(true);
    }
    
    public List<SkillTree> getUserSkillTrees(String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        return skillTreeRepository.findByAuthorId(user.getId());
    }
    
    public SkillTree getSkillTree(String id) {
        return skillTreeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("SkillTree not found"));
    }
    
    public SkillTree createSkillTree(SkillTree skillTree, String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        skillTree.setAuthor(user);
        return skillTreeRepository.save(skillTree);
    }
    
    public SkillTree updateSkillTree(String id, SkillTree skillTree, String username) {
        SkillTree existingSkillTree = skillTreeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("SkillTree not found"));
        
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!existingSkillTree.getAuthor().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized to update this skilltree");
        }
        
        skillTree.setId(id);
        skillTree.setAuthor(user);
        return skillTreeRepository.save(skillTree);
    }
    
    public void deleteSkillTree(String id, String username) {
        SkillTree skillTree = skillTreeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("SkillTree not found"));
        
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!skillTree.getAuthor().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized to delete this skilltree");
        }
        
        skillTreeRepository.delete(skillTree);
    }
} 