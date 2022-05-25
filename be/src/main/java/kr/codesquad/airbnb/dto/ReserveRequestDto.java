package kr.codesquad.airbnb.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReserveRequestDto {

    private int feePerOneNight;
    private int nightNumber;
    private int cleaningFee;
    private int serviceCommission;
    private int tax;

}
