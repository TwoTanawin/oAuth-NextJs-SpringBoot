package dev.twotanawin.backend.config;

import org.springframework.web.filter.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        // Define the CORS configuration
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // Allows credentials like cookies or authorization headers
        config.setAllowedOrigins(List.of("http://localhost:3000")); // Frontend URL(s)
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With")); // Allowed headers
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // HTTP methods

        // Apply this configuration to all routes
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}