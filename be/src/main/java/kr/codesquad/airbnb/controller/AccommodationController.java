package kr.codesquad.airbnb.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import kr.codesquad.airbnb.dto.ReserveFormResponseDto;
import kr.codesquad.airbnb.dto.ReserveRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
import kr.codesquad.airbnb.service.AccommodationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/accommodation")
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping("/search/{query}")
    public ResponseEntity<List<SearchQueryResponseDto>> getSearchResult(@ModelAttribute SearchQueryRequestDto requestDto) {
        List<SearchQueryResponseDto> result = accommodationService.search(requestDto);
        return ResponseEntity.ok(Collections.singletonList(new SearchQueryResponseDto()));
    }

    @GetMapping("/reserve/{accommodationId}")
    public ResponseEntity<ReserveFormResponseDto> getReserveForm(@PathVariable String accommodationId) {
        return ResponseEntity.ok(new ReserveFormResponseDto());
    }

    @PostMapping("/reserve/{accommodationId}")
    public HttpStatus postReservation(@RequestBody ReserveRequestDto requestDto) {
        return HttpStatus.OK;
    }

}
