package com.Long.McQuade.SchedulingSystem.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/homepage")
public class homepageController {

    @GetMapping("/")
    public String showHomepage() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        return "This is the homepage and user " + authentication.getName() + " is logged in";
    }
}
