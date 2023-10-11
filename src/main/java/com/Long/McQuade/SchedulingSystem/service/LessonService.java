package com.Long.McQuade.SchedulingSystem.service;

import com.Long.McQuade.SchedulingSystem.entities.Lesson;
import com.Long.McQuade.SchedulingSystem.entities.Student;

import java.util.List;

public interface LessonService {

    List<Lesson> findAll();

    Lesson findBy(int id);

    Lesson save(Lesson lesson);

    String deleteByID(int id);

}
