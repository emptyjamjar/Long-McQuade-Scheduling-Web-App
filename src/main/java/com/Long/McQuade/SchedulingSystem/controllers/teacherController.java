package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.Authority;
import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.Teacher;
import com.Long.McQuade.SchedulingSystem.entities.User;
import com.Long.McQuade.SchedulingSystem.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/teachers")
@CrossOrigin(origins = "http://localhost:5173")
public class teacherController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TeacherServiceImpl teacherService;

    @Autowired
    private AuthorityServiceImpl authorityService;

    /**
     *
     * @return list of all teachers
     */
    @GetMapping("/")
    public List<Teacher> showAllTeachers() {
        return teacherService.findAll();
    }

<<<<<<< HEAD
//    @GetMapping("/{id}")
//    public Teacher showTeacherByID(@PathVariable("id") int id) {
//
//        return teacherService.findBy(id);
//    }
=======
    /**
     *
     * @param id id of teacher
     * @return list of teacher with specified id
     */
    @GetMapping("/{id}")
    public Teacher showTeacherByID(@PathVariable("id") int id) {
>>>>>>> 4360d0d81a4581dd5d395f20f5fac998e9938b09

    @GetMapping("/{teacherNumber}")
    public Teacher showTeacherByID(@PathVariable("teacherNumber") String teacherNumber) {

        return teacherService.findTeacherByTeacherNumber(teacherNumber);
    }

    /**
     *
     * @param teacher the new student
     * @return the new student
     */
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

    /**
     *
     * @param teacher the updated student
     * @return the updated student details
     */
    @PutMapping("/updateteacher")
    public Teacher updateCurrentTeacher(@RequestBody Teacher teacher) {

        Teacher newTeacher = teacherService.save(teacher);

        User oldUser = userService.findBy(teacher.getId());
        oldUser.setFirstName(newTeacher.getFirstName());
        oldUser.setLastName(newTeacher.getLastName());
        userService.save(oldUser);

        return newTeacher;
    }

    /**
     *
     * @param id of teacher to be deleted
     * @return conformation of teacher deletion
     */
    @DeleteMapping("/deleteteacher/{id}")
    public String deleteCurrentStudent(@PathVariable("id") int id) {

        authorityService.deleteByID(id);
        userService.deleteByID(id);
        studentService.deleteByID(id);
        return teacherService.deleteByID(id);
    }


}
