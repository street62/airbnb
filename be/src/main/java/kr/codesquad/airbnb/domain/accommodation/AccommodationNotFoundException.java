package kr.codesquad.airbnb.domain.accommodation;

import kr.codesquad.airbnb.exception.CustomException;

public class AccommodationNotFoundException extends CustomException {

    public AccommodationNotFoundException() {
        super("이 숙소 번호는 유효하지 않은 번호입니다");
    }

    @Override
    public int getStatus() {
        return 404;
    }
}
