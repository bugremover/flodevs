package com.synapz;

import com.synapz.dto.AuthResponse;
import com.synapz.dto.LoginRequest;
import com.synapz.model.MindMap;
import com.synapz.model.SkillTree;
import com.synapz.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class ApiIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    private String token;
    private HttpHeaders headers;

    @BeforeEach
    void setup() {
        // Register a test user
        User testUser = new User();
        testUser.setUsername(TestData.TEST_USERNAME);
        testUser.setPassword(TestData.TEST_PASSWORD);
        testUser.setEmail(TestData.TEST_EMAIL);

        ResponseEntity<AuthResponse> registerResponse = restTemplate.postForEntity(
            "/api/auth/register",
            testUser,
            AuthResponse.class
        );
        assertEquals(HttpStatus.OK, registerResponse.getStatusCode());

        // Login to get token
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername(TestData.TEST_USERNAME);
        loginRequest.setPassword(TestData.TEST_PASSWORD);

        ResponseEntity<AuthResponse> loginResponse = restTemplate.postForEntity(
            "/api/auth/login",
            loginRequest,
            AuthResponse.class
        );
        assertEquals(HttpStatus.OK, loginResponse.getStatusCode());
        token = loginResponse.getBody().getToken();

        // Set up headers with token
        headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);
    }

    @Test
    void testTestEndpoint() {
        ResponseEntity<String> response = restTemplate.getForEntity("/api/test", String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Backend is running!", response.getBody());
    }

    @Test
    void testMindMapOperations() {
        // Create mind map
        MindMap mindMap = new MindMap();
        mindMap.setTitle(TestData.TEST_MINDMAP_TITLE);
        mindMap.setDescription(TestData.TEST_MINDMAP_DESCRIPTION);
        mindMap.setIsPublic(true); 

        HttpEntity<MindMap> request = new HttpEntity<>(mindMap, headers);
        ResponseEntity<MindMap> createResponse = restTemplate.postForEntity(
            "/api/mindmap",
            request,
            MindMap.class
        );
        assertEquals(HttpStatus.OK, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody().getId());

        // Get mind map
        ResponseEntity<MindMap> getResponse = restTemplate.exchange(
            "/api/mindmap/" + createResponse.getBody().getId(),
            HttpMethod.GET,
            new HttpEntity<>(headers),
            MindMap.class
        );
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertEquals(TestData.TEST_MINDMAP_TITLE, getResponse.getBody().getTitle());
    }

    @Test
    void testSkillTreeOperations() {
        // Create skill tree
        SkillTree skillTree = new SkillTree();
        skillTree.setTitle(TestData.TEST_SKILLTREE_TITLE);
        skillTree.setDescription(TestData.TEST_SKILLTREE_DESCRIPTION);
        skillTree.setCategory(TestData.TEST_SKILLTREE_CATEGORY);
        skillTree.setPublic(true);

        HttpEntity<SkillTree> request = new HttpEntity<>(skillTree, headers);
        ResponseEntity<SkillTree> createResponse = restTemplate.postForEntity(
            "/api/skilltree",
            request,
            SkillTree.class
        );
        assertEquals(HttpStatus.OK, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody().getId());

        // Get skill tree
        ResponseEntity<SkillTree> getResponse = restTemplate.exchange(
            "/api/skilltree/" + createResponse.getBody().getId(),
            HttpMethod.GET,
            new HttpEntity<>(headers),
            SkillTree.class
        );
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertEquals(TestData.TEST_SKILLTREE_TITLE, getResponse.getBody().getTitle());
    }

    @Test
    void testFeedEndpoint() {
        ResponseEntity<String> response = restTemplate.exchange(
            "/api/feed",
            HttpMethod.GET,
            new HttpEntity<>(headers),
            String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }
} 