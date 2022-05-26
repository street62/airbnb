package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Reservation {

    private Accommodation accommodation;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;

    public boolean isAvailableDate(LocalDate startDate, LocalDate endDate) {
        return endDate.isBefore(checkinDate) || startDate.isAfter(checkoutDate);
    }
}
