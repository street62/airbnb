package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Accommodation;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SearchQueryResponseDto {

    private String name;
    private String imgUrl;
    private int maxPeople;
    private int feePerOneNight;

    public static SearchQueryResponseDto of(Accommodation accommodation) {
        SearchQueryResponseDto responseDto = new SearchQueryResponseDto();
        responseDto.name = accommodation.getName();
        responseDto.imgUrl = accommodation.getImgUrl();
        responseDto.maxPeople = accommodation.getPeopleConstraint().getSum();
        responseDto.feePerOneNight = accommodation.getFeePerOneNight();
        return responseDto;
    }
}
