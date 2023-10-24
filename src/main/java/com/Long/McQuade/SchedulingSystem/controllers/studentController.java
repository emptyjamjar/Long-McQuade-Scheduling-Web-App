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
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/students")
public class studentController {

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
     * @return list of all students
     */
    @GetMapping("/")
    public List<Student> showAllUsers() {
        return studentService.findAll();
    }

    /**
     *
     * @param id id of student
     * @return list of student with specified id
     */
    @GetMapping("/{id}/")
    public Student showStudentByID(@PathVariable("id") int id) {

        return studentService.findBy(id);
    }

    /**
     *
     * @param studentNumber student number of student to be found
     * @return student returned
     */
    @GetMapping("/{studentNumber}")
    public Student findStudentByStudentNumber(@PathVariable("studentNumber") String studentNumber) {

        return studentService.findStudentByStudentNumber(studentNumber);
    }

    /**
     *
     * @param student the new student
     * @return the new student
     */
    @PostMapping("/addstudent")
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


    /**
     *
     * @param student the updated student
     * @return the updated student details
     */
    @PutMapping("/updatestudent")
    public Student updateCurrentStudent(@RequestBody Student student) {

        Student newStudent = studentService.save(student);

        User oldUser = userService.findBy(student.getId());
        oldUser.setFirstName(newStudent.getFirstName());
        oldUser.setLastName(newStudent.getLastName());
        userService.save(oldUser);

        return newStudent;
    }

    /**
     *
     * @param id id of student to be deleted
     * @return conformation of student deletion
     */
    @DeleteMapping("/deletestudent/{id}")
    public String deleteCurrentStudent(@PathVariable("id") int id) {

        authorityService.deleteByID(id);
        userService.deleteByID(id);
        teacherService.deleteByID(id);
        return studentService.deleteByID(id);
    }

}
