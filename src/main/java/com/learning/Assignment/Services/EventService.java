package com.learning.Assignment.Services;

import com.learning.Assignment.Models.Event;
import com.learning.Assignment.Repositories.EventRepository;
import com.learning.Assignment.Exceptions.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    public List<Event> findAllEvents() {
        return eventRepository.findAll();
    }

    public Event findEventById(Integer id) throws NotFoundException {
        Optional<Event> eventOptional = eventRepository.findById(id);
        if(eventOptional.isEmpty()){
            throw new NotFoundException("event not found with id: "+ id);
        }

        return eventOptional.get();
    }

    public List<Event> findEventByFilters(Integer endYear, String topic, String swot, String region, String sector, String pest, String source, String country, String city) {
        List<Event>eventList  = null;
        if(endYear!=null || topic !=null || swot!=null || region!=null || sector!=null
                || pest!=null || source !=null || country!=null || city !=null){
            eventList = eventRepository.findByEndYearOrTopicOrSwotOrRegionOrSectorOrPestleOrSourceOrCountryOrCity(
                    endYear, topic, swot, region, sector, pest, source, country, city);
        }else{
            eventList = eventRepository.findAll();
        }
        return eventList;
    }
}
