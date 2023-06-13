package com.foodbox.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = AdminNotFoundException.class)
	public ResponseEntity<Object> exception(AdminNotFoundException ex) {
		return new ResponseEntity<Object>("Admin not found in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = AdminAlreadyExistsException.class)
	public ResponseEntity<Object> exception(AdminAlreadyExistsException ex) {
		return new ResponseEntity<Object>("Admin already exists in database", HttpStatus.CONFLICT);
	}
	@ExceptionHandler(value = UserNotFoundException.class)
	public ResponseEntity<Object> exception(UserNotFoundException ex) {
		return new ResponseEntity<Object>("User not found in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = UserAlreadyExistsException.class)
	public ResponseEntity<Object> exception(UserAlreadyExistsException ex) {
		return new ResponseEntity<Object>("User already exists in database", HttpStatus.CONFLICT);
	}
	@ExceptionHandler(value = ProductNotFoundException.class)
	public ResponseEntity<Object> exception(ProductNotFoundException ex) {
		return new ResponseEntity<Object>("Product not found in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = ProductAlreadyExistsException.class)
	public ResponseEntity<Object> exception(ProductAlreadyExistsException ex) {
		return new ResponseEntity<Object>("Product already exists in database", HttpStatus.CONFLICT);
	}
}
