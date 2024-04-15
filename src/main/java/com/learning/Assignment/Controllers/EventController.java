package com.learning.Assignment.Controllers;

import com.learning.Assignment.Models.Event;
import com.learning.Assignment.Services.EventService;
import com.learning.Assignment.Exceptions.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService){
        this.eventService = eventService;
    }


//    @GetMapping
//    public ResponseEntity<List<Event>> getAllEvents(){
//        List<Event> eventList = eventService.findAllEvents();
//        return new ResponseEntity<>(eventList, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable("id") Integer id){
        Event event = null;
        try {
            event = eventService.findEventById(id);
        } catch (NotFoundException e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Event>> getEventsBasedOnFilters(
            @RequestParam(required = false) Integer startYear,
            @RequestParam(required = false) Integer endYear,
            @RequestParam(required = false) String topic,
            @RequestParam(required = false) String swot,
            @RequestParam (required = false)String region,
            @RequestParam (required = false) String sector,
            @RequestParam (required = false) String pestle,
            @RequestParam (required = false) String source,
            @RequestParam (required = false) String country,
            @RequestParam (required = false) String city
    ){
        List<Event> events = eventService.findEventByFilters(startYear, endYear,topic,swot,region,
                sector, pestle, source, country, city);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }
}
