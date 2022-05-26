package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ReserveRequestDto {

    private int feePerOneNight;
    private int nightNumber;
    private int cleaningFee;
    private int serviceCommission;
    private int tax;

}
