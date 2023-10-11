package com.Long.McQuade.SchedulingSystem.service;

import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.Teacher;

import java.util.List;

public interface TeacherService {

    List<Teacher> findAll();

    Teacher findBy(int id);

    Teacher save(Teacher teacher);

    String deleteByID(int id);
}
