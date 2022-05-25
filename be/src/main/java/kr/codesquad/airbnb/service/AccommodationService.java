package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Accommodation;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
import kr.codesquad.airbnb.repository.AccommodationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AccommodationService {
    private final AccommodationRepository accommodationRepository;

    public List<SearchQueryResponseDto> search(Map<String, String> searchConditions) {
        List<Accommodation> filteredByCheckinDate = accommodationRepository.findByDateGreaterThanEqual(searchConditions.get("checkinDate"));
        return filteredByCheckinDate.stream()
                .filter(ac -> ac.isAvailableInDate(searchConditions.get("checkinDate"), searchConditions.get("checkoutDate")))
                .filter(ac -> ac.isAvailableByPrice(searchConditions.get("minimumPrice"), searchConditions.get("maximumPrice")))
                .filter(ac -> ac.isAvailableByPeople(searchConditions.get("adultCount"), searchConditions.get("childCount"), searchConditions.get("infantCount")))
                .collect(Collectors.toList());
    }

    private Map<String, Object> parseSearchCondition(Map<String, String> searchConditions) {
        Map<String, Object> parsedConditions = new HashMap<>();

    }
}
