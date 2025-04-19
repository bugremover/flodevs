package com.synapz.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

@Data
@Document(collection = "skilltrees")
public class SkillTree {
    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private List<Skill> skills;
    private List<Connection> connections;
    private boolean isPublic;
    @DBRef
    private User author;
    
    @Data
    public static class Skill {
        private String id;
        private String name;
        private String description;
        private int level = 1;
        private List<String> prerequisites;
        private Position position;
        
        @Data
        public static class Position {
            private double x;
            private double y;
        }
    }
    
    @Data
    public static class Connection {
        private String source;
        private String target;
        private String type = "default";
    }
} 