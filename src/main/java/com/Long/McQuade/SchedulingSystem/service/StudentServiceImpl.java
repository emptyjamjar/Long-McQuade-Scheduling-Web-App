package com.Long.McQuade.SchedulingSystem.service;

import com.Long.McQuade.SchedulingSystem.entities.Student;
import com.Long.McQuade.SchedulingSystem.repositories.StudentRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    private StudentRepo repo;

    @Override
    public List<Student> findAll() {
        return repo.findAll();
    }

    @Override
    public Student findBy(int id) {
        Optional<Student> result = repo.findById(id);
        Student theStudent = null;

        if (result.isPresent()) {
            theStudent = result.get();
        }
        else {
            throw new RuntimeException("Did not find student with id - " + id);
        }
        return theStudent;
    }

    @Override
    public Student save(Student student) {
        return repo.save(student);
    }

    @Override
    public String deleteByID(int id) {

        repo.deleteById(id);

        return "Student with id - " + id + " has been deleted";
    }
}
