package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Accommodation;
import kr.codesquad.airbnb.dto.SearchQueryRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
import kr.codesquad.airbnb.repository.AccommodationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AccommodationService {
    private final AccommodationRepository accommodationRepository;

    public List<SearchQueryResponseDto> search(SearchQueryRequestDto requestDto) {
        List<Accommodation> filteredByCheckinDate = accommodationRepository.findByDateBetween(requestDto.getCheckinDate(), requestDto.getCheckoutDate());
        return filteredByCheckinDate.stream()
                .filter(ac -> ac.isAvailableByPrice(requestDto.getMinimumPrice(), requestDto.getMaximumPrice()))
                .filter(ac -> ac.isAvailableByPeople(requestDto.getAdultCount(), requestDto.getAdultCount(), requestDto.getAdultCount()))
                .map(SearchQueryResponseDto::of)
                .collect(Collectors.toList());
    }
}
