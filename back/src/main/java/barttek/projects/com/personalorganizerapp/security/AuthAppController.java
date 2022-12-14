package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRole;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;


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

    @GetMapping("/token/refresh")
    public ResponseEntity<HttpHeaders> refreshToken(Authentication authentication, HttpServletRequest request) {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refreshToken = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secretinoApplicatianino".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refreshToken);
                String username = decodedJWT.getSubject();

                AppUser appUser = (AppUser) authAppService.loadUserByUsername(username);

                int validityTimeInMsAccessToken = 10 * 60 * 1000;

                HttpHeaders headers = new HttpHeaders();
                headers.add("access_token", authAppService.createJwtToken(appUser, request, validityTimeInMsAccessToken));
                headers.add("refresh_token", refreshToken);
                return new ResponseEntity<>(headers, HttpStatus.OK);
            } catch (Exception exception) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
