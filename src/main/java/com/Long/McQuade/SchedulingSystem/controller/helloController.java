package com.Long.McQuade.SchedulingSystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Timer;
import java.util.logging.Logger;

@RestController
public class helloController {

    @GetMapping
    public String helloWorld() {
        return "Testing";
        }
}
