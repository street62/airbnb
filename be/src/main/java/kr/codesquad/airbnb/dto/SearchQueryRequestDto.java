package kr.codesquad.airbnb.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class SearchQueryRequestDto {

    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private int minimumPrice;
    private int maximumPrice;
    private int adultCount;
    private int childCount;
    private int infantCount;

}
