package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.User;
import com.Long.McQuade.SchedulingSystem.service.StudentServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/students")
public class studentController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/")
    public List<Student> showAllStudents() {
        return studentService.findAll();
    }

    @GetMapping("/{id}")
    public Student showStudentByID(@PathVariable("id") int id) {

        return studentService.findBy(id);
    }

    @PostMapping("/addstudent")
    public Student addNewStudent(@RequestBody Student student) {


        User user = new User(student.getId(), student.getFirstName(), student.getLastName(), "password1234", "STUDENT");
        userService.save(user);
        studentService.save(student);
        student.setStudentNumber("S" + student.getId());
        return studentService.save(student);
    }


    @PutMapping("/updatestudent")
    public Student updateCurrentStudent(@RequestBody Student student) {

        //student.setStudentNumber(student.getStudentNumber());
        Student newStudent = studentService.save(student);

        return newStudent;
    }

    @DeleteMapping("/deletestudent/{id}")
    public String deleteCurrentStudent(@PathVariable("id") int id) {
        return studentService.deleteByID(id);
    }

}
