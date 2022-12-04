package barttek.projects.com.personalorganizerapp.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class SpringSessionController {

    @GetMapping("/")
    public String process(Model model, HttpSession session) {
        @SuppressWarnings("unchecked")
        List<String> messages = (List<String>) session.getAttribute("MY_SESSION_MESSAGES");

        System.out.println("Here");

        if (messages == null) {
            messages = new ArrayList<>();
        }

        Object appUser = session.getAttribute("AppUser");

        if (appUser == null) {
            AppUser appUser1 = new AppUser();
            model.addAttribute("AppUser", appUser1);
        }

        System.out.println(model.getAttribute("AppUser"));

        model.addAttribute("sessionMessages", messages);

//        set new user account as parameter for session

        return "index";
    }
}
