package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.airbnb.domain.Accommodation;
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
        List<Accommodation> accommodations = accommodationRepository.findAll();
        return accommodations.stream()
            .filter(ac -> ac.isAvailableByDate(requestDto.getCheckinDate(),
                requestDto.getCheckoutDate()))
            .filter(ac -> ac.isAvailableByPrice(requestDto.getMinimumPrice(),
                requestDto.getMaximumPrice()))
            .filter(
                ac -> ac.isAvailableByPeople(requestDto.getAdultCount(), requestDto.getAdultCount(),
                    requestDto.getAdultCount()))
            .map(SearchQueryResponseDto::of)
            .collect(Collectors.toList());
    }

    public List<Integer> getAllPrices() {
        return accommodationRepository.findAllprices();
    }
}
