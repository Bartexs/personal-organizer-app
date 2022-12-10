package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class AuthAppController {
    private final AuthAppService authAppService;

    @Autowired
    public AuthAppController(AuthAppService authAppService) {
        this.authAppService = authAppService;
    }

    @RequestMapping("/res")
    public ResponseEntity<String> resource() {
        String response = "GIT";
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping("/create")
    public ResponseEntity<AppUser> registerNewUser() {
        AppUser appUser = new AppUser("MICHAEL", "userfirst", "hispassword", AppUserRole.USER);
        this.authAppService.registerNewAppUser(appUser);
        return new ResponseEntity<>(appUser, HttpStatus.CREATED);
    }
}
