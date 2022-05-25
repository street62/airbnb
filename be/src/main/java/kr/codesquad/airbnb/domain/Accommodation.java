package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Accommodation {

    private String name;
    private String imgUrl;
    private Map<LocalDate, Boolean> nonAvailableDate = new HashMap<>();
    private int feePerOneNight;
    private PeopleConstraint peopleConstraint;
    private int[] coordinates = new int[2];

    public Accommodation(int feePerOneNight, PeopleConstraint peopleConstraint) {
        this.feePerOneNight = feePerOneNight;
        this.peopleConstraint = peopleConstraint;
    }

    public boolean isAvailableByDate(LocalDate checkinDate, LocalDate checkoutDate) {
        for (LocalDate date = checkinDate; date.compareTo(checkoutDate) <= 0; date.plusDays(1)) {
            if (nonAvailableDate.containsKey(date)) {
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
