package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.Authority;
import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.Teacher;
import com.Long.McQuade.SchedulingSystem.entities.User;
import com.Long.McQuade.SchedulingSystem.service.AuthorityServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.StudentServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.TeacherServiceImpl;
import com.Long.McQuade.SchedulingSystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/students")
@CrossOrigin(origins = "http://localhost:5173")
public class studentController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private TeacherServiceImpl teacherService;

    @Autowired
    private AuthorityServiceImpl authorityService;

    @GetMapping("/")
    public List<Student> showAllUsers() {
        return studentService.findAll();
    }

    @GetMapping("/{id}/")
    public Student showStudentByID(@PathVariable("id") int id) {

        return studentService.findBy(id);
    }

    @GetMapping("/s")
    public ResponseEntity<String> getName() {
        String name = "John Doe"; // Replace this with the actual logic to get the user's name
        return ResponseEntity.ok(name);
    }


    @GetMapping("/{studentNumber}")
    public Student findStudentByStudentNumber(@PathVariable("studentNumber") String studentNumber) {

        return studentService.findStudentByStudentNumber(studentNumber);
    }

    @PostMapping("/addstudent")
    @CrossOrigin
    public Student addNewStudent(@RequestBody Student student) {


        studentService.save(student);
        student.setStudentNumber("S" + student.getId());

        User user = new User(student.getStudentNumber(), student.getFirstName(), student.getLastName(), "password1234", true);
        userService.save(user);

        Authority authority = new Authority(student.getStudentNumber(), "STUDENT");
        authorityService.save(authority);

        Teacher teacher = new Teacher(null, null, null, null, null, null);
        teacherService.save(teacher);


        return studentService.save(student);
    }


    @PutMapping("/updatestudent")
    public Student updateCurrentStudent(@RequestBody Student student) {

        Student newStudent = studentService.save(student);

        User oldUser = userService.findBy(student.getId());
        oldUser.setFirstName(newStudent.getFirstName());
        oldUser.setLastName(newStudent.getLastName());
        userService.save(oldUser);

        return newStudent;
    }

    @DeleteMapping("/deletestudent/{id}")
    public String deleteCurrentStudent(@PathVariable("id") int id) {

        authorityService.deleteByID(id);
        userService.deleteByID(id);
        teacherService.deleteByID(id);
        return studentService.deleteByID(id);
    }

}
