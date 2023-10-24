package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.LessonCentre;
import com.Long.McQuade.SchedulingSystem.service.LessonCentreImpl;
import com.Long.McQuade.SchedulingSystem.service.LessonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lessonCentres")
public class lessonCentreController {

    @Autowired
    LessonCentreImpl lessonCentreService;

    @GetMapping("/")
    public List<LessonCentre> findAllCentres() {

        return lessonCentreService.findAll();
    }

    /**
     *
     * @param id - id of lesson centre
     * @return the lesson centre by the id entered
     */
    @GetMapping("/{id}")
    public LessonCentre findByID(@PathVariable("id") int id) {

        return lessonCentreService.findBy(id);
    }

    /**
     *
     * @param lessonCentre - the lesson centre the user has created
     * @return the lesson centre after it has been added to the database
     */
    @PostMapping("/addcentre")
    public LessonCentre addCentre(@RequestBody LessonCentre lessonCentre) {

        return lessonCentreService.save(lessonCentre);
    }

    /**
     *
     * @param lessonCentre the updated lessonCentre
     * @return the updated lesson centre
     */
    @PutMapping("/updatecentre")
    public LessonCentre updateCentre(@RequestBody LessonCentre lessonCentre) {

        LessonCentre lessonCentre1 = lessonCentreService.save(lessonCentre);
        return lessonCentre1;
    }

    /**
     *
     * @param id of centre to be deleted
     * @return a conformation that the lesson centre has been deleted
     */
    @DeleteMapping("/deletecentre/{id}")
    public String deleteCentre(@PathVariable("id") int id) {

        return lessonCentreService.deleteByID(id);
    }


}
