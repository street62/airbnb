package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class ReserveRequestDto {

    private Long userId;
    private int feePerOneNight;
    private int nightNumber;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private int cleaningFee;
    private int serviceCommission;
    private int discountedAmount;
    private int tax;

}
