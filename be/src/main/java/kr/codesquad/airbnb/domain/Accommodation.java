package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import java.util.List;
import lombok.Getter;

@Getter
public class Accommodation {

    private String name;
    private String imgUrl;
    private List<Reservation> reservations;
    private int feePerOneNight;
    private PeopleConstraint peopleConstraint;
    private double[] coordinates = new double[2];

    public Accommodation(int feePerOneNight, PeopleConstraint peopleConstraint,
        double[] coordinates) {
        this.feePerOneNight = feePerOneNight;
        this.peopleConstraint = peopleConstraint;
        this.coordinates = coordinates;
    }

    public boolean isAvailableByDate(LocalDate checkinDate, LocalDate checkoutDate) {
        for (Reservation reservation : reservations) {
            if (!reservation.isAvailableDate(checkinDate, checkoutDate)) {
                return false;
            }
        }
        return true;
    }

    public boolean isAvailableByPrice(int minimumPrice, int maximumPrice) {
        return minimumPrice <= feePerOneNight && feePerOneNight <= maximumPrice;
    }

    public boolean isAvailableByPeople(int adultCount, int childCount, int infantCount) {
        return peopleConstraint.isAvailable(adultCount, childCount, infantCount);
    }
}
