package kr.codesquad.airbnb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository {

    @Query(value = "SELECT fee_per_one_night FROM Accommodation", nativeQuery = true)
    List<Integer> findAllprices();
}
