package kr.codesquad.airbnb.domain;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class PeopleConstraint {

    private int maxAdult;
    private int maxChild;
    private int maxInfant;


    public boolean isAvailable(int adultCount, int childCount, int infantCount) {
        return maxAdult >= adultCount && maxChild >= childCount
            && maxInfant >= infantCount;
    }

    public int getSum() {
        return maxAdult + maxChild + maxInfant;
    }

}
