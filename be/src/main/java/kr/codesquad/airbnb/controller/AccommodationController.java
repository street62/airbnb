package kr.codesquad.airbnb.controller;

import java.util.List;
import kr.codesquad.airbnb.dto.ReserveFormResponseDto;
import kr.codesquad.airbnb.dto.ReserveRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
import kr.codesquad.airbnb.service.AccommodationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/accommodations")
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping
    public ResponseEntity<List<SearchQueryResponseDto>> getSearchResult(
        @ModelAttribute SearchQueryRequestDto requestDto) {
        return ResponseEntity.ok(accommodationService.search(requestDto));
    }

    @GetMapping("/prices")
    public ResponseEntity<List<Integer>> getAllPrices() {
        return ResponseEntity.ok(accommodationService.getAllPrices());
    }

    @GetMapping("/{accommodationId}/reservation")
    public ResponseEntity<ReserveFormResponseDto> getReserveForm(
        @PathVariable String accommodationId) {
        return ResponseEntity.ok(accommodationService.getReservationPage(accommodationId));
    }

    @PostMapping("/{accommodationId}/reservation")
    public HttpStatus postReservation(@RequestBody ReserveRequestDto requestDto, @PathVariable Long accommodationId) {
        return accommodationService.generateNewReservation(requestDto, accommodationId);
    }

}
