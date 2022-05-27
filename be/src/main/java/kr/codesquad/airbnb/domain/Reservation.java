package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reservation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
    @ManyToOne
    @JoinColumn(name = "ACCOMMODATION_ID")
    private Accommodation accommodation;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private int serviceCommissionFee;
    private int cleaningFee;
    private int tax;
    private int feePerOneNight;
    private int discountAmount;
}
