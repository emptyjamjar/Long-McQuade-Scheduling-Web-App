package com.Long.McQuade.SchedulingSystem.service;

import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.entities.Teacher;
import com.Long.McQuade.SchedulingSystem.repositories.TeacherRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherServiceImpl implements TeacherService{

    private TeacherRepo repo;

    @Override
    public List<Teacher> findAll() {
        return repo.findAll();
    }

    @Override
    public Teacher findBy(int id) {
        Optional<Teacher> result = repo.findById(id);
        Teacher theTeacher = null;

        if (result.isPresent()) {
            theTeacher = result.get();
        }
        else {
            throw new RuntimeException("Did not find teacher with id - " + id);
        }
        return theTeacher;
    }

    @Override
    public Teacher save(Teacher teacher) {
        return repo.save(teacher);
    }

    @Override
    public String deleteByID(int id) {

        repo.deleteById(id);

        return "Teacher with id - " + id + " has been deleted";
    }
}
