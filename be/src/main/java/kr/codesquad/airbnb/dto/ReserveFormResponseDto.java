package kr.codesquad.airbnb.dto;

import java.util.Map;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReserveFormResponseDto {

    private int feePerOneNight;
    private int cleaningFee;
    private Map<String, Integer> maxPeople;
}
