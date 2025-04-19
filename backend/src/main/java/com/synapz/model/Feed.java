package com.synapz.model;

import lombok.Data;

import java.util.List;

@Data
public class Feed {
    
    private List<MindMap> mindMaps;
    private List<SkillTree> skillTrees;
} 