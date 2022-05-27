package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Accommodation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name="DISCOUNT_POLICY_ID")
    private DiscountPolicy discountPolicy;
    private String name;
    private String imgUrl;
    @OneToMany(mappedBy = "reservation")
    private List<Reservation> reservations;
    private int feePerOneNight;
    private int adultChildCapacity;
    private int infantCapacity;
    private double coordinateX;
    private double coordinateY;
    private int cleaningFee;
    }
}
