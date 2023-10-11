package com.Long.McQuade.SchedulingSystem.repositories;

import com.Long.McQuade.SchedulingSystem.entities.Lesson;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepo extends CrudRepository<Lesson, Integer> {

}
