package kr.codesquad.airbnb.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@Getter
@Entity
public class DiscountPolicy {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double discountRate;

    public DiscountPolicy(double discountRate) {
        this.discountRate = discountRate;
    }
}
