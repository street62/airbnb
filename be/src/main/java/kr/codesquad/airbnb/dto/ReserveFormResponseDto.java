package kr.codesquad.airbnb.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

@Getter
@NoArgsConstructor
public class ReserveFormResponseDto {
    private int feePerOneNight;
    private int cleaningFee;
    private Map<String, Integer> maxPeople;
}
