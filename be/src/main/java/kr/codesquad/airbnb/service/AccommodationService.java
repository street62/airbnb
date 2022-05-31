package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.airbnb.domain.Accommodation;
import kr.codesquad.airbnb.dto.ReserveFormResponseDto;
import kr.codesquad.airbnb.dto.SearchQueryRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
import kr.codesquad.airbnb.repository.AccommodationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    public List<SearchQueryResponseDto> search(SearchQueryRequestDto requestDto) {
        List<Accommodation> searchResult = accommodationRepository.findAllBySearchCondition(
            requestDto.getCheckinDate(),
            requestDto.getCheckoutDate(),
            requestDto.getMinimumPrice(),
            requestDto.getMaximumPrice(),
            requestDto.getAdultCount() + requestDto.getChildCount(),
            requestDto.getInfantCount()
        );
        return searchResult.stream().map(SearchQueryResponseDto::of)
            .collect(Collectors.toList());
    }

    public List<Integer> getAllPrices() {
        return accommodationRepository.findAllprices();
    }

    public ReserveFormResponseDto getReservationPage(String accommodationId) {
        Accommodation accommodation = accommodationRepository.findById(
                Long.valueOf(accommodationId))
            .orElseThrow(RuntimeException::new);
        return ReserveFormResponseDto.of(accommodation);
    }
}
