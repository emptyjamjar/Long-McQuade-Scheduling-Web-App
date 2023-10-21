package com.Long.McQuade.SchedulingSystem.controllers;

import com.Long.McQuade.SchedulingSystem.entities.Lesson;
import com.Long.McQuade.SchedulingSystem.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/homepage")
public class homepageController {

    @Autowired
    private StudentServiceImpl studentService;

    @Autowired
    private TeacherServiceImpl teacherServiceImpl;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private LessonServiceImpl lessonService;

    @GetMapping("/")
    public String showHomepage() {

        String message = "";
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String authority = authentication.getAuthorities().iterator().next().getAuthority();

        String identificationNumber = authentication.getName();

        switch (authority) {
            case "ADMIN":

                message += "Your first name is: " + userService.findByUserNumber(identificationNumber).getFirstName() + " \n\n\n";
                break;

            case "TEACHER":
                for (Lesson lesson: lessonService.findLessonsByTeacherNumber(identificationNumber)) {
                    message += lesson.toString();
                    message += "\n";
                }
                break;

            case "STUDENT":
                for (Lesson lesson: lessonService.findLessonsByStudentNumber(identificationNumber)) {
                    message += lesson.toString();
                    message += "\n";
                }
                break;
        }

        message += "\nThis is the homepage and user " + authentication.getName() + " is logged in";



        return message;
    }
}
