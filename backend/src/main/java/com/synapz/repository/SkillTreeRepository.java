package com.synapz.repository;

import com.synapz.model.SkillTree;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillTreeRepository extends MongoRepository<SkillTree, String> {
    List<SkillTree> findByAuthorIdAndIsPublic(String authorId, boolean isPublic);
    List<SkillTree> findByIsPublic(boolean isPublic);
    List<SkillTree> findByAuthorId(String authorId);
    List<SkillTree> findByCategory(String category);
    List<SkillTree> findByIsPublicTrue();
} 