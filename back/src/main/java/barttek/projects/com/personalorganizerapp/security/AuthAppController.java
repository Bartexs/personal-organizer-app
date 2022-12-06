package barttek.projects.com.personalorganizerapp.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

public class AuthAppController {

    @CrossOrigin
    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

}
