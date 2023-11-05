package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.*;
import com.Long.McQuade.SchedulingSystem.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/teachers")
public class teacherController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TeacherServiceImpl teacherService;

    @Autowired
    private AuthorityServiceImpl authorityService;

    @Autowired
    private LessonServiceImpl lessonService;

    @GetMapping("/")
    public List<Teacher> showAllTeachers() {
        return teacherService.findAll();
    }

//    @GetMapping("/{id}")
//    public Teacher showTeacherByID(@PathVariable("id") int id) {
//
//        return teacherService.findBy(id);
//    }

    @GetMapping("/{teacherNumber}")
    public Teacher showTeacherByID(@PathVariable("teacherNumber") String teacherNumber) {

        return teacherService.findTeacherByTeacherNumber(teacherNumber);
    }

    @PostMapping("/addteacher")
    public Teacher addNewTeacher(@RequestBody Teacher teacher) {

        teacherService.save(teacher);
        teacher.setTeacherNumber("T" + teacher.getId());

        User user = new User(teacher.getTeacherNumber(), teacher.getFirstName(), teacher.getLastName(), "password1234", true);
        userService.save(user);

        Authority authority = new Authority(teacher.getTeacherNumber(), "TEACHER");
        authorityService.save(authority);

        Student student = new Student(null, null, null, null, null, null, null, null);
        studentService.save(student);

        return teacherService.save(teacher);
    }

    @PutMapping("/updateteacher")
    public Teacher updateCurrentTeacher(@RequestBody Teacher teacher) {

        Teacher newTeacher = teacherService.save(teacher);

        User oldUser = userService.findBy(teacher.getId());
        oldUser.setFirstName(newTeacher.getFirstName());
        oldUser.setLastName(newTeacher.getLastName());
        userService.save(oldUser);

        return newTeacher;
    }

    @DeleteMapping("/deleteteacher/{teacherNumber}")
    public String deleteCurrentStudent(@PathVariable("teacherNumber") String teacherNumber) {

        Teacher teacher = teacherService.findTeacherByTeacherNumber(teacherNumber);

        authorityService.deleteByID(teacher.getId());
        userService.deleteByID(teacher.getId());
        studentService.deleteByID(teacher.getId());

        List<Lesson> teacherLessons = lessonService.findLessonsByTeacherNumber(teacherNumber);

        for (Lesson lesson: teacherLessons) {
            lessonService.deleteByID(lesson.getId());
        }

        return teacherService.deleteByID(teacher.getId());
    }


}
