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
@RequestMapping("/users")
public class userController {

    @Autowired
    private StudentServiceImpl studentService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TeacherServiceImpl teacherService;

    @Autowired
    private AuthorityServiceImpl authorityService;


    @GetMapping("/")
    public List<User> showAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{identificationNumber}")
    public User showUserByID(@PathVariable("identificationNumber") String identificationNumber) {

        return userService.findByUserNumber(identificationNumber);
    }

    @PostMapping("/addadmin")
    public User addAdmin(@RequestBody User user) {


        User newUser = new User("A" + user.getId(), user.getFirstName(), user.getLastName(), user.getPwd(), true);
        userService.save(newUser);
        newUser.setUserNumber("A" + newUser.getId());

        Authority authority = new Authority(newUser.getUserNumber(), "ADMIN");
        authorityService.save(authority);

        Student student = new Student(null, null, null, null, null, null, null, null);
        studentService.save(student);

        Teacher teacher = new Teacher(null, null, null, null, null, null, null, null);
        teacherService.save(teacher);


        return userService.save(newUser);
    }

    @PutMapping("/updateadmin")
    public User updateAdmin(@RequestBody User user) {

        return userService.save(user);
    }

    @DeleteMapping("/deleteadmin/{id}")
    public void deleteAdmin(@PathVariable("id") String id) {

        User user = userService.findByUserNumber(id);


        teacherService.deleteByID(user.getId());
        studentService.deleteByID(user.getId());
        authorityService.deleteByID(user.getId());
        userService.deleteByID(user.getId());
    }

}
