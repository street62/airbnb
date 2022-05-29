package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Accommodation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
public class SearchQueryResponseDto {

    private String name;
    private String imgUrl;
    private int maxPeople;
    private int feePerOneNight;
    private double coordinateX;
    private double coordinateY;

    public static SearchQueryResponseDto of(Accommodation accommodation) {
        return SearchQueryResponseDto.builder()
                .name(accommodation.getName())
                .imgUrl(accommodation.getImgUrl())
                .maxPeople(accommodation.getPeopleConstraint().getSum())
                .feePerOneNight(accommodation.getFeePerOneNight())
                .coordinateX(accommodation.getCoordinates()[0])
                .coordinateY(accommodation.getCoordinates()[1])
                .build();
    }
}
