package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRepository;
import barttek.projects.com.personalorganizerapp.user.CurrentlyAuthAppUser;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

//
@Service
public class AuthAppService implements UserDetailsService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private CurrentlyAuthAppUser currentlyAuthAppUser;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return appUserRepository.findAppUserByUsername(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(email)));
    }

    public void setCurrentlyAuthenticatedAppUser(AppUser appUser) {
        this.currentlyAuthAppUser.setAppUser(appUser);
    }

    public AppUser registerNewAppUser(AppUser appUser) {
        return this.appUserRepository.save(appUser);
    }

    public String createJwtToken(AppUser authenticatedAppUser, HttpServletRequest request, int validityTimeInMs ) {
        String secretForAlgo = "secretinoApplicatianino";

        Algorithm algorithm = Algorithm.HMAC256(secretForAlgo.getBytes());
        return JWT.create()
                .withSubject(authenticatedAppUser.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + validityTimeInMs))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("appUserRole", authenticatedAppUser.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
    }

    public HttpHeaders createHeadersWithJwtTokenForLoginResponse(Authentication authentication, HttpServletRequest request) {
        AppUser appUser = (AppUser)authentication.getPrincipal();
        int validityTimeInMsAccessToken = 10 * 60 * 1000;
        int validityTimeInMsRefreshToken = 30 * 60 * 1000;

        HttpHeaders headers = new HttpHeaders();
        headers.add("access_token", this.createJwtToken(appUser, request, validityTimeInMsAccessToken));
        headers.add("refresh_token", this.createJwtToken(appUser, request, validityTimeInMsRefreshToken));
        return headers;
    }

    public boolean isUsernameAlreadyRegistered(String username) {
        Optional<AppUser> appUserOptional = this.appUserRepository.findAppUserByUsername(username);
        return appUserOptional.isPresent();
    }

}
