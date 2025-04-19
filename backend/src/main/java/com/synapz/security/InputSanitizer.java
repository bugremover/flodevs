package com.synapz.security;

import org.springframework.stereotype.Component;
import java.util.regex.Pattern;

@Component
public class InputSanitizer {
    
    private static final Pattern XSS_PATTERN = Pattern.compile(
        "<script.*?>.*?</script>|javascript:|on\\w+=",
        Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL
    );
    
    private static final Pattern SQL_INJECTION_PATTERN = Pattern.compile(
        "(?i)(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|--|;|OR\\s+1=1)",
        Pattern.CASE_INSENSITIVE
    );

    public String sanitizeInput(String input) {
        if (input == null) {
            return null;
        }
        
        // Remove XSS attempts
        String sanitized = XSS_PATTERN.matcher(input).replaceAll("");
        
        // Remove SQL injection attempts
        sanitized = SQL_INJECTION_PATTERN.matcher(sanitized).replaceAll("");
        
        // Trim whitespace
        sanitized = sanitized.trim();
        
        return sanitized;
    }

    public boolean isSafeInput(String input) {
        if (input == null) {
            return true;
        }
        
        return !XSS_PATTERN.matcher(input).find() &&
               !SQL_INJECTION_PATTERN.matcher(input).find();
    }
} 