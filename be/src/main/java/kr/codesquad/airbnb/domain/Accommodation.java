package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class Accommodation {

    private Map<LocalDate, Boolean> nonAvailableDate = new HashMap<>();
    private int feePerOneNight;
    private Map<String, Integer> maxPeople;
    private int[] coordinates = new int[2];

    public Accommodation(int feePerOneNight, Map<String, Integer> maxPeople) {
        this.feePerOneNight = feePerOneNight;
        this.maxPeople = maxPeople;
    }

    public boolean isAvailableInDate(String checkinDateString, String checkoutDateString) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate checkinDate = LocalDate.parse(checkinDateString, formatter);
        LocalDate checkoutDate = LocalDate.parse(checkinDateString, formatter);

        for (LocalDate date = checkinDate; date.compareTo(checkoutDate) <= 0; date.plusDays(1)) {
            if (nonAvailableDate.containsKey(date)) {
                return false;
            }
        }
        return true;
    }

    public boolean isAvailableByPrice(String minimumPriceString, String maximumPriceString) {
        int minimumPrice = Integer.parseInt(minimumPriceString);
        int maximumPrice = Integer.parseInt(maximumPriceString);

        return minimumPrice <= feePerOneNight && feePerOneNight <= maximumPrice;
    }

    public boolean isAvailableByPeople(String adultCountString, String childCountString, String infantCountString) {
        int adultCount = Integer.parseInt(adultCountString);
        int childCount = Integer.parseInt(childCountString);
        int infantCount = Integer.parseInt(infantCountString);

        return maxPeople.get("adult") >= adultCount && maxPeople.get("child") >= childCount && maxPeople.get("infant") >= infantCount;
    }
}
