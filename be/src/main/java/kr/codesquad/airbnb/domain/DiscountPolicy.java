package kr.codesquad.airbnb.domain;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
public class DiscountPolicy {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double discountRate;

    public DiscountPolicy(double discountRate) {
        this.discountRate = discountRate;
    }
}
