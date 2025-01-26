package dev.twotanawin.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home(){
        return "Hello, Home";
    }

    @GetMapping("/secured")
    public String secured(@AuthenticationPrincipal OAuth2User principal) {
        String userId = principal.getAttribute("sub");  // or principal.getName()
        String email = principal.getAttribute("email");
        String name = principal.getAttribute("name");

        return String.format("User ID: %s, Name: %s, Email: %s",
                userId, name, email);
    }
}
