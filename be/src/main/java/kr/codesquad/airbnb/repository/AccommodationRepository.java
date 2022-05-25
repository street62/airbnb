package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository {

    List<Accommodation> findByDateBetween(LocalDate checkinDate, LocalDate checkoutDate);


}
