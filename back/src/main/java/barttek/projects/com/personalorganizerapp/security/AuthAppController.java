package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;


@RestController
@CrossOrigin
public class AuthAppController {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private AuthAppService authAppService;

    @RequestMapping("/login")
    public ResponseEntity<Map<String, String>> login(Authentication authentication, HttpServletRequest request) {
        HttpHeaders headers = authAppService.createHeadersWithJwtTokenForLoginResponse(authentication, request);
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    @RequestMapping("/some-resource")
    public ResponseEntity<Map<String, String>> resource() {
        Map<String, String> respond = new HashMap<>();
        respond.put("Value", "GIT");
        return new ResponseEntity<>(respond, HttpStatus.OK);
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

    @RequestMapping("/register")
    public ResponseEntity<AppUser> registerNewUser() {
        AppUser appUser = new AppUser("MICHAEL", "userfirst@wp.pl", bCryptPasswordEncoder.encode("hispassword"), AppUserRole.USER);

        this.authAppService.registerNewAppUser(appUser);
        return new ResponseEntity<>(appUser, HttpStatus.CREATED);
    }


}
