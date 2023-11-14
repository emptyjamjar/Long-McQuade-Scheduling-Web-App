package com.Long.McQuade.SchedulingSystem.controllers;

import com.Long.McQuade.SchedulingSystem.entities.Request;
import com.Long.McQuade.SchedulingSystem.service.LessonServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/teachers")
@CrossOrigin(origins = "http://localhost:5173")
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/teachers")
>>>>>>> 2536628b (students and teachers can submit requests to admin for actions to be performed.)
public class teacherViewController {

    @Autowired
    private LessonServiceImpl lessonService;

    @Autowired
    private RequestServiceImpl requestService;


    @GetMapping("/requestLessonChange")
    public String requestLessonChange(@RequestBody String message) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String name = authentication.getName();

        Request request = new Request(name, message, "PENDING");
        requestService.save(request);
        return "Request for change has been sent to admin";
    }
}
