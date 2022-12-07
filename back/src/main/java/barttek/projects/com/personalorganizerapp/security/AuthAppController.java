package barttek.projects.com.personalorganizerapp.security;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpResponse;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin
public class AuthAppController {

//    @RequestMapping("/login")
//    public boolean login(@RequestBody User user) {
//
//    }
//
//    @RequestMapping("/user")
//    public Principal user(HttpServletRequest request) {
//
//    }

    @RequestMapping("/res")
    public ResponseEntity<String> resource() {
        String response = "GIT";
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping("/ant")
    public ResponseEntity<String> ant() {
        String response = "GIT222222222222222222222";
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
