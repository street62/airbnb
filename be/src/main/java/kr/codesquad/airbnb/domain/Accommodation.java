package kr.codesquad.airbnb.domain;

import lombok.Getter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Getter
public class Accommodation {

    private String name;
    private String imgUrl;
    private Map<LocalDate, Boolean> nonAvailableDate = new HashMap<>();
    private int feePerOneNight;
    private Map<String, Integer> maxPeople;
    private int[] coordinates = new int[2];

    public Accommodation(int feePerOneNight, Map<String, Integer> maxPeople) {
        this.feePerOneNight = feePerOneNight;
        this.maxPeople = maxPeople;
    }

    public boolean isAvailableByPrice(int minimumPrice, int maximumPrice) {
        return minimumPrice <= feePerOneNight && feePerOneNight <= maximumPrice;
    }

    public boolean isAvailableByPeople(int adultCount, int childCount, int infantCount) {
        return maxPeople.get("adult") >= adultCount && maxPeople.get("child") >= childCount && maxPeople.get("infant") >= infantCount;
    }


}
