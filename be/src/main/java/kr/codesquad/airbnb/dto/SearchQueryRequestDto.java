package kr.codesquad.airbnb.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

@AllArgsConstructor
@Getter
public class SearchQueryRequestDto {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkinDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkoutDate;
    private int minimumPrice;
    private int maximumPrice;
    private int adultCount;
    private int childCount;
    private int infantCount;

}
