package com.synapz.service;

import com.synapz.model.MindMap;
import com.synapz.model.User;
import com.synapz.repository.MindMapRepository;
import com.synapz.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MindMapService {
    
    private final MindMapRepository mindMapRepository;
    private final UserRepository userRepository;
    
    public List<MindMap> getPublicMindMaps() {
        return mindMapRepository.findByIsPublic(true);
    }
    
    public List<MindMap> getUserMindMaps(String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        return mindMapRepository.findByAuthorId(user.getId());
    }
    
    public MindMap getMindMap(String id) {
        return mindMapRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("MindMap not found"));
    }
    
    public MindMap createMindMap(MindMap mindMap, String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        mindMap.setAuthor(user);
        return mindMapRepository.save(mindMap);
    }
    
    public MindMap updateMindMap(String id, MindMap mindMap, String username) {
        MindMap existingMindMap = mindMapRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("MindMap not found"));
        
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!existingMindMap.getAuthor().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized to update this mindmap");
        }
        
        mindMap.setId(id);
        mindMap.setAuthor(user);
        return mindMapRepository.save(mindMap);
    }
    
    public void deleteMindMap(String id, String username) {
        MindMap mindMap = mindMapRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("MindMap not found"));
        
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!mindMap.getAuthor().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized to delete this mindmap");
        }
        
        mindMapRepository.delete(mindMap);
    }
} 