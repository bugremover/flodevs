package com.synapz.controller;

import com.synapz.model.Feed;
import com.synapz.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/feed")
public class FeedController {

    @Autowired
    private FeedService feedService;

    @GetMapping
    public ResponseEntity<Feed> getFeed() {
        Feed feed = feedService.getFeed();
        return ResponseEntity.ok(feed);
    }
} 