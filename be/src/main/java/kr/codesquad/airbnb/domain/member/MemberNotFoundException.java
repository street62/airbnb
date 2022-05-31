package kr.codesquad.airbnb.domain.member;

import kr.codesquad.airbnb.exception.CustomException;

public class MemberNotFoundException extends CustomException {

    public MemberNotFoundException() {
        super("이 유저 번호는 유효하지 않은 번호입니다");
    }

    @Override
    public int getStatus() {
        return 404;
    }
}
