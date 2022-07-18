package kr.codesquad.airbnb.exception;

public abstract class CustomException extends RuntimeException {

    public CustomException(String message) {
        super(message);
    }

    public abstract int getStatus();
}
