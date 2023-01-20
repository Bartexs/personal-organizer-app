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
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/login")
    public ResponseEntity<JwtResponse> login(Authentication authentication, HttpServletRequest request) {
        int validityTimeInMsAccessToken = 10 * 60 * 1000;
        int validityTimeInMsRefreshToken = 30 * 60 * 1000;

        AppUser appUser = (AppUser)authentication.getPrincipal();

        String access_token = authAppService.createJwtToken(appUser, request, validityTimeInMsAccessToken);
        String refresh_token = authAppService.createJwtToken(appUser, request, validityTimeInMsRefreshToken);

        return ResponseEntity.ok(new JwtResponse(access_token, refresh_token));
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
    public AppUser user(Principal user) {
        return (AppUser) authAppService.loadUserByUsername(user.getName());
    }

    @PostMapping("/register")
    public ResponseEntity<AppUser> registerNewUser(@RequestBody AppUser appUser) {
        if(authAppService.isUsernameAlreadyRegistered(appUser.getUsername())) {
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        } else {
            String currPassword = appUser.getPassword();
            String encodedPassword = bCryptPasswordEncoder.encode(currPassword);
            appUser.setPassword(encodedPassword);
            authAppService.registerNewAppUser(appUser);
            return new ResponseEntity<>(appUser, HttpStatus.CREATED);
        }
    }
}
