package kr.codesquad.airbnb.repository;

import java.time.LocalDate;
import kr.codesquad.airbnb.domain.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    @Query(value = ""
        + "SELECT AC2"
        + "FROM"

        + "(SELECT AC1"
        + "FROM Accommodation AS AC1"
        + "WHERE "
        + ":minPrice <= AC.feePerOneNight AND"
        + "AC.feePerOneNight <= :maxPrice AND"
        + ":adultChildCapacity <= AC.adultChildCapacity AND"
        + ":infantCount <= AC.infantCapacity"
        + ") AS AC2 "

        + "LEFT JOIN"

        + "(SELECT "
        + "FROM Reservation AS RS1"
        + "WHERE"
        + "RS1.checkinDate <= :checkinDate AND"
        + ":checkoutDate <= RS1.checkoutDate"
        + ") AS RS2"

        + "ON AC2.id = RS2.accommodation_id"
        )
    List<Accommodation> findAllBySearchCondition(
        @Param("checkinDate") LocalDate checkinDate,
        @Param("checkoutDate") LocalDate checkoutDate,
        @Param("minPrice") int minPrice,
        @Param("maxPrice") int maxPrice,
        @Param("adultChildCount") int adultCount,
        @Param("infantCount") int infantCount
        );

    @Query(value = "SELECT fee_per_one_night FROM Accommodation", nativeQuery = true)
    List<Integer> findAllprices();
}
