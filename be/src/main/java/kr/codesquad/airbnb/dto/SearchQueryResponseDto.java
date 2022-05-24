package kr.codesquad.airbnb.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SearchQueryResponseDto {

    private String name;
    private String imgUrl;
    private int maxPeople;
    private int feePerOneNight;

}
