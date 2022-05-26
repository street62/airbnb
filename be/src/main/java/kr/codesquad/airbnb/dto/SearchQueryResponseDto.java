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
    private double coordinateX;
    private double coordinateY;

    public static SearchQueryResponseDto of(Accommodation accommodation) {
        SearchQueryResponseDto responseDto = new SearchQueryResponseDto();
        responseDto.name = accommodation.getName();
        responseDto.imgUrl = accommodation.getImgUrl();
        responseDto.maxPeople = accommodation.getPeopleConstraint().getSum();
        responseDto.feePerOneNight = accommodation.getFeePerOneNight();
        responseDto.coordinateX = accommodation.getCoordinates()[0];
        responseDto.coordinateY = accommodation.getCoordinates()[1];
        return responseDto;
    }
}
