package com.synapz.service.impl;

import com.synapz.model.Feed;
import com.synapz.model.MindMap;
import com.synapz.model.SkillTree;
import com.synapz.repository.MindMapRepository;
import com.synapz.repository.SkillTreeRepository;
import com.synapz.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedServiceImpl implements FeedService {
    
    @Autowired
    private MindMapRepository mindMapRepository;
    
    @Autowired
    private SkillTreeRepository skillTreeRepository;
    
    @Override
    public Feed getFeed() {
        Feed feed = new Feed();
        feed.setMindMaps(mindMapRepository.findByIsPublicTrue());
        feed.setSkillTrees(skillTreeRepository.findByIsPublicTrue());
        return feed;
    }
} 