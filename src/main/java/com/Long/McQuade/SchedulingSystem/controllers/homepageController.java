package com.Long.McQuade.SchedulingSystem.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/homepage")
public class homepageController {

    @GetMapping("/")
    public String showHomepage() {

        return "This is the homepage";
    }
}
