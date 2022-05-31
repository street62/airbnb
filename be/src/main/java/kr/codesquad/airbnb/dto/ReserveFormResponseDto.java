package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class ReserveFormResponseDto {

    private int feePerOneNight;
    private int cleaningFee;
    private int adultChildCapacity;
    private int infantCapacity;
    private double discountRate;

    public static ReserveFormResponseDto of(Accommodation accommodation) {
        return ReserveFormResponseDto.builder()
            .feePerOneNight(accommodation.getFeePerOneNight())
            .cleaningFee(accommodation.getCleaningFee())
            .adultChildCapacity(accommodation.getAdultChildCapacity())
            .infantCapacity(accommodation.getInfantCapacity())
            .discountRate(accommodation.getDiscountPolicy().getDiscountRate())
            .build();
    }
}
