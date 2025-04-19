package com.synapz.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Component
public class RateLimitingInterceptor implements HandlerInterceptor {
    
    private static final int MAX_REQUESTS = 100;
    private static final long TIME_WINDOW = TimeUnit.MINUTES.toMillis(1);
    private final Map<String, RequestCounter> requestCounters = new ConcurrentHashMap<>();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String clientIp = getClientIp(request);
        RequestCounter counter = requestCounters.computeIfAbsent(clientIp, k -> new RequestCounter());
        
        if (counter.isRateLimited()) {
            response.setStatus(HttpServletResponse.SC_REQUEST_TIMEOUT);
            return false;
        }
        
        counter.increment();
        return true;
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    private static class RequestCounter {
        private int count = 0;
        private long lastReset = System.currentTimeMillis();

        synchronized boolean isRateLimited() {
            long now = System.currentTimeMillis();
            if (now - lastReset > TIME_WINDOW) {
                count = 0;
                lastReset = now;
            }
            return count >= MAX_REQUESTS;
        }

        synchronized void increment() {
            count++;
        }
    }
} 