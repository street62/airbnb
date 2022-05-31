package kr.codesquad.airbnb.domain.reservation;

import java.time.LocalDate;
import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import kr.codesquad.airbnb.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reservation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
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
