package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.Lesson;
import com.Long.McQuade.SchedulingSystem.service.LessonServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.StudentServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.TeacherServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lessons")
@CrossOrigin(origins = "http://localhost:5173")
public class lessonController {

    @Autowired
    private LessonServiceImpl lessonService;

    @Autowired
    private StudentServiceImpl studentService;

    @Autowired
    private TeacherServiceImpl teacherService;

    @GetMapping("/")
    public List<Lesson> showAllLessons() {
        return lessonService.findAll();
    }

    @GetMapping("/{lessonNumber}")
    public Lesson showLessonByLessonNumber(@PathVariable("lessonNumber") String lessonNumber) {

        int id = Character.getNumericValue(lessonNumber.charAt(1));
        return lessonService.findBy(id);
    }

    @PostMapping("/newlesson")
    public Lesson createlesson(@RequestBody Lesson lesson) {

        lessonService.save(lesson);
        lesson.setLessonNumber("L" + lesson.getId());
        return lessonService.save(lesson);
    }

    @PutMapping("/updatelesson")
    public Lesson updateLesson(@RequestBody Lesson lesson) {

        Lesson newLesson = lessonService.save(lesson);
        return newLesson;
    }

    @DeleteMapping("/deletelesson/{lessonNumber}")
    public String deleteLesson(@PathVariable("lessonNumber") String lessonNumber) {

        int id = Character.getNumericValue(lessonNumber.charAt(1));
        return lessonService.deleteByID(id);
    }

}
