package com.Long.McQuade.SchedulingSystem.service;


import com.Long.McQuade.SchedulingSystem.entities.Student;

import java.util.List;

public interface StudentService {

    List<Student> findAll();

    Student findBy(int id);

    Student save(Student student);

    String deleteByID(int id);


}
