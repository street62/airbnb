package kr.codesquad.airbnb.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import kr.codesquad.airbnb.domain.member.Member;
import kr.codesquad.airbnb.domain.reservation.Reservation;
import kr.codesquad.airbnb.domain.accommodation.AccommodationNotFoundException;
import kr.codesquad.airbnb.domain.member.MemberNotFoundException;
import kr.codesquad.airbnb.dto.*;
import kr.codesquad.airbnb.repository.AccommodationRepository;
import kr.codesquad.airbnb.repository.MemberRepository;
import kr.codesquad.airbnb.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;
    private final MemberRepository memberRepository;
    private final ReservationRepository reservationRepository;

    public List<SearchQueryResponseDto> getSearchResult(SearchQueryRequestDto requestDto) {
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
                .orElseThrow(AccommodationNotFoundException::new);
        return ReserveFormResponseDto.of(accommodation);
    }

    public ReserveResponseDto registerReservation(ReserveRequestDto requestDto, Long accommodationId) {
        Member member = memberRepository.findById(requestDto.getUserId())
                .orElseThrow(MemberNotFoundException::new);
        Accommodation accommodation = accommodationRepository.findById(accommodationId)
                .orElseThrow(RuntimeException::new);
        Reservation reservation = Reservation.builder()
                .member(member)
                .accommodation(accommodation)
                .checkinDate(requestDto.getCheckinDate())
                .checkoutDate(requestDto.getCheckoutDate())
                .serviceCommissionFee(requestDto.getServiceCommission())
                .cleaningFee(requestDto.getCleaningFee())
                .tax(requestDto.getTax())
                .feePerOneNight(requestDto.getFeePerOneNight())
                .discountAmount(requestDto.getDiscountedAmount())
                .build();

        reservationRepository.save(reservation);
        return new ReserveResponseDto(200, "예약 요청이 완료되었습니다.");
    }

    public Map<String, Object> getPriceCountsByDateRange(LocalDate checkinDate, LocalDate checkoutDate) {
        Map<String, Object> result = new HashMap<>();
        List<Accommodation> accommodations = accommodationRepository.findAllBySearchCondition(checkinDate, checkoutDate, 0, 2147000000, 0, 0);
        int[] prices = new int[100];
        int numberOfNights = (int) ChronoUnit.DAYS.between(checkinDate, checkoutDate);
        int totalAmountOfFeePerOneNight = 0;

        for (Accommodation accommodation : accommodations) {
            totalAmountOfFeePerOneNight += accommodation.getFeePerOneNight();
            int amount = accommodation.getFeePerOneNight();// n박당 해당 숙소의 총 경비
            int index = calculateIndex(amount);
            prices[index] += 1;
        }

        result.put("pricesByRange", prices);
        result.put("averageFeePerOneNight", totalAmountOfFeePerOneNight / accommodations.size());
        return result;
    }

    private int calculateIndex(int amount) {
        int index = amount / 10000 - 1;
        if (index < 0) {
            index = 0;
        } else if (index > 99) {
            index = 99;
        }
        return index;
    }
}
