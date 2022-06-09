package kr.codesquad.airbnb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("oauth")
public class OauthController {
    @GetMapping("/access")
    public String getCallback(String code) {
        return code;
    }

}
