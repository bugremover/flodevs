package com.synapz.repository;

import com.synapz.model.MindMap;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MindMapRepository extends MongoRepository<MindMap, String> {
    List<MindMap> findByAuthorIdAndIsPublic(String authorId, boolean isPublic);
    List<MindMap> findByIsPublic(boolean isPublic);
    List<MindMap> findByAuthorId(String authorId);
    List<MindMap> findByTagsIn(List<String> tags);
    List<MindMap> findByIsPublicTrue();
} 