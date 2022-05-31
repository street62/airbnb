package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;

import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import kr.codesquad.airbnb.domain.member.Member;
import kr.codesquad.airbnb.domain.reservation.Reservation;
import kr.codesquad.airbnb.domain.accommodation.AccommodationNotFoundException;
import kr.codesquad.airbnb.domain.member.MemberNotFoundException;
import kr.codesquad.airbnb.dto.ReserveFormResponseDto;
import kr.codesquad.airbnb.dto.ReserveRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryRequestDto;
import kr.codesquad.airbnb.dto.SearchQueryResponseDto;
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
                .orElseThrow(AccommodationNotFoundException::new);
        return ReserveFormResponseDto.of(accommodation);
    }

    public HttpStatus generateNewReservation(ReserveRequestDto requestDto, Long accommodationId) {
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
        return HttpStatus.OK;
    }
}
