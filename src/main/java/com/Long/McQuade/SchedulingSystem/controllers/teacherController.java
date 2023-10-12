package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.Teacher;
import com.Long.McQuade.SchedulingSystem.entities.User;
import com.Long.McQuade.SchedulingSystem.service.StudentServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.TeacherServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users/teachers")
public class teacherController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TeacherServiceImpl teacherService;

    @GetMapping("/")
    public List<Teacher> showAllTeachers() {
        return teacherService.findAll();
    }

    @GetMapping("/{id}")
    public Teacher showTeacherByID(@PathVariable("id") int id) {

        return teacherService.findBy(id);
    }

    @PostMapping("/addteacher")
    public Teacher addNewTeacher(@RequestBody Teacher teacher) {

        int length = teacherService.findAll().size() + 1;
        teacher.setTeacherNumber("T" + length);
        User user = new User(teacher.getTeacherNumber(), teacher.getFirstName(), teacher.getLastName(), "password1234", "TEACHER");
        userService.save(user);
        teacherService.save(teacher);
        Student student = new Student(null, null, null, null, null, null, null, null);
        studentService.save(student);

        return teacherService.save(teacher);
    }

    @PutMapping("/updateteacher")
    public Teacher updateCurrentTeacher(@RequestBody Teacher teacher) {

        Teacher newTeacher = teacherService.save(teacher);
        User oldUser = userService.findBy(teacher.getId());
        User user = new User(teacher.getTeacherNumber(), teacher.getFirstName(), teacher.getLastName(), oldUser.getPwd(), oldUser.getAuthority());
        userService.save(user);

        return newTeacher;
    }

    @DeleteMapping("/deleteteacher/{id}")
    public String deleteCurrentStudent(@PathVariable("id") int id) {

        userService.deleteByID(id);
        studentService.deleteByID(id);
        return teacherService.deleteByID(id);
    }


}
