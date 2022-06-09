package kr.codesquad.airbnb.controller;

import com.google.gson.Gson;
import kr.codesquad.airbnb.domain.member.Member;
import kr.codesquad.airbnb.service.OauthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@RestController
@RequestMapping("oauth")
@RequiredArgsConstructor
public class OauthController {

    private final OauthService oauthService;

    @GetMapping("/callback")
    public String getCallback(String code) {
        return code;
    }

    @GetMapping("/webclient")
    public ResponseEntity<Member> sendRequestToResourceServer(@RequestParam("authCode") String authCode) throws FileNotFoundException {
        return ResponseEntity.ok(oauthService.getUserInfoAndSaveUser(authCode));
    }

}
