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
@RequestMapping("/users")
public class userController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TeacherServiceImpl teacherService;


    @GetMapping("/")
    public List<User> showAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User showUserByID(@PathVariable("id") int id) {

        return userService.findBy(id);
    }

    @PostMapping("/addadmin")
    public User addAdmin(@RequestBody User user) {



        User newUser = new User("A" + user.getId(), user.getFirstName(), user.getLastName(), user.getPwd(), "ADMIN");
        userService.save(newUser);
        newUser.setUserNumber("A" + newUser.getId());
        Student student = new Student(null, null, null, null, null, null, null, null);
        Teacher teacher = new Teacher(null, null, null, null, null, null);
        teacherService.save(teacher);
        studentService.save(student);


        return userService.save(newUser);
    }

    @PutMapping("/updateadmin")
    public User updateAdmin(@RequestBody User user) {

        return userService.save(user);
    }

    @DeleteMapping("/deleteadmin/{id}")
    public void deleteAdmin(@PathVariable("id") int id) {

        teacherService.deleteByID(id);
        studentService.deleteByID(id);
        userService.deleteByID(id);
    }

}
