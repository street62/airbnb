package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReserveRequestDto {

    private Long userId;
    private int feePerOneNight;
    private int nightNumber;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkinDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkoutDate;
    private int cleaningFee;
    private int serviceCommission;
    private int discountedAmount;
    private int tax;

}
