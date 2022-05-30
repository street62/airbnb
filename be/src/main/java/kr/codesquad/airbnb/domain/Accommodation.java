package kr.codesquad.airbnb.domain;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "DISCOUNT_POLICY_ID")
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
