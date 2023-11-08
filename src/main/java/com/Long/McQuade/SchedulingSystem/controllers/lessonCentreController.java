package com.Long.McQuade.SchedulingSystem.controllers;


import com.Long.McQuade.SchedulingSystem.entities.LessonCentre;
import com.Long.McQuade.SchedulingSystem.service.LessonCentreImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lessonCentres")
@CrossOrigin(origins = "http://localhost:5173")
public class lessonCentreController {

    @Autowired
    LessonCentreImpl lessonCentreService;

    @GetMapping("/")
    public List<LessonCentre> findAllCentres() {

        return lessonCentreService.findAll();
    }

    @GetMapping("/{id}")
    public LessonCentre findByID(@PathVariable("id") int id) {

        return lessonCentreService.findBy(id);
    }

    @PostMapping("/addcentre")
    public LessonCentre addCentre(@RequestBody LessonCentre lessonCentre) {

        return lessonCentreService.save(lessonCentre);
    }

    @PutMapping("/updatecentre")
    public LessonCentre updateCentre(@RequestBody LessonCentre lessonCentre) {

        LessonCentre lessonCentre1 = lessonCentreService.save(lessonCentre);
        return lessonCentre1;
    }

    @DeleteMapping("/deletecentre/{id}")
    public String deleteCentre(@PathVariable("id") int id) {

        return lessonCentreService.deleteByID(id);
    }


}
