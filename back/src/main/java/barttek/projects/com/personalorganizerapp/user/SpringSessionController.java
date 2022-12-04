package barttek.projects.com.personalorganizerapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;
@Controller
public class SpringSessionController {

    @Autowired
    private SpringSessionService springSessionService;

    @GetMapping("/")
    public ResponseEntity<AppUserInterface> appUserAccountName(Model model, HttpSession session) {
        Object appUser = session.getAttribute("AppUser");

        System.out.println(appUser);

        double num = Math.random();
        int num2 = (int) (num * 10);

        if (appUser == null) {
            AppUserUnregistered appUser1 = new AppUserUnregistered(num2, "demo");
            model.addAttribute("AppUser", appUser1);
        }

        System.out.println(session);

        AppUserInterface aps1 = (AppUserInterface) model.getAttribute("AppUser");

        return new ResponseEntity<>(aps1, HttpStatus.OK);
    }

//    org.springframework.session.web.http.SessionRepositoryFilter$SessionRepositoryRequestWrapper$HttpSessionWrapper@48c1e435
}
