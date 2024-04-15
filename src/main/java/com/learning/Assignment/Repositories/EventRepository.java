package com.learning.Assignment.Repositories;

import com.learning.Assignment.Models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {

    public List<Event> findByStartYearOrEndYearOrTopicOrSwotOrRegionOrSectorOrPestleOrSourceOrCountryOrCity(
           Integer startYear,
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


    @Query("SELECT e FROM Event e " +
            "WHERE (:startYear IS NULL OR e.startYear = :startYear) " +
            "AND (:endYear IS NULL OR e.endYear = :endYear) " +
            "AND (:topic IS NULL OR e.topic =:topic) " +
            "AND (:sector IS NULL OR e.sector = :sector) " +
            "AND (:region IS NULL OR e.region = :region) " +
            "AND (:pestle IS NULL OR e.pestle = :pestle) " +
            "AND (:source IS NULL OR e.source = :source) " +
            "AND (:swot IS NULL OR e.swot = :swot) " +
            "AND (:country IS NULL OR e.country = :country) " +
            "AND (:city IS NULL OR e.city = :city)")
    List<Event> findEvents(
            @Param("startYear") Integer startYear,
            @Param("endYear") Integer endYear,
            @Param("topic") String topic,
            @Param("swot") String swot,
            @Param("region") String region,
            @Param("sector") String sector,
            @Param("pestle") String pestle,
            @Param("source") String source,
            @Param("country") String country,
            @Param("city") String city
    );
}
