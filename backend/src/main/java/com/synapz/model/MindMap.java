package com.synapz.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

@Data
@Document(collection = "mindmaps")
public class MindMap {
    @Id
    private String id;
    private String title;
    private String description;
    private List<Node> nodes;
    private List<Connection> connections;
    private boolean isPublic = false;
    private List<String> tags;
    @DBRef
    private User author;
    
    @Data
    public static class Node {
        private String id;
        private String content;
        private Position position;
        private String color = "#000000";
        private String shape = "rectangle";
        private int level = 0;
        
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
        private String label;
        private String type = "default";
    }

    public boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(boolean isPublic) {
        this.isPublic = isPublic;
    }
} 