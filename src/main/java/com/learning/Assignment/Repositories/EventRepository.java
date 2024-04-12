package com.learning.Assignment.Repositories;

import com.learning.Assignment.Models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {

    public List<Event> findByEndYearOrTopicOrSwotOrRegionOrSectorOrPestleOrSourceOrCountryOrCity(
            Integer endYear,
            String topic,
            String swot,
            String region,
            String sector,
            String pestle,
            String source,
            String country,
            String city
    );
}
