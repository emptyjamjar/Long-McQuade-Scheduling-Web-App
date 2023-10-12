package com.Long.McQuade.SchedulingSystem.service;


import com.Long.McQuade.SchedulingSystem.entities.Lesson;
import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.repositories.LessonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LessonServiceImpl implements LessonService{

    @Autowired
    private LessonRepo repo;
    @Override
    public List<Lesson> findAll() {

        return repo.findAll();
    }

    @Override
    public Lesson findBy(int id) {

        Optional<Lesson> result = repo.findById(id);
        Lesson theLesson = null;

        if (result.isPresent()) {
            theLesson = result.get();
        }
        else {
            throw new RuntimeException("Did not find lesson with id - " + id);
        }
        return theLesson;
    }

    @Override
    public Lesson save(Lesson lesson) {
        return repo.save(lesson);
    }

    @Override
    public String deleteByID(int id) {

        repo.deleteById(id);
        return "Lesson with id - " + id + " has been deleted";
    }
}
