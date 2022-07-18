package kr.codesquad.airbnb.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(value = CustomException.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(CustomException exception) {
        int statusCode = exception.getStatus();
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage(), statusCode);
        return new ResponseEntity<>(errorResponse,HttpStatus.valueOf(statusCode));
    }
}
