package kr.codesquad.airbnb.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorResponse {

    private String message;
    private int statusCode;

}
