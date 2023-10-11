package com.Long.McQuade.SchedulingSystem.repositories;

import com.Long.McQuade.SchedulingSystem.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Integer> {


}
