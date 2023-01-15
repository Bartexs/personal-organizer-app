package barttek.projects.com.personalorganizerapp.user;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import org.springframework.security.core.context.SecurityContextHolder;

public class AppUserUtility {
    private final AuthAppService authAppService;

    public AppUserUtility(AuthAppService authAppService) {
        this.authAppService = authAppService;
    }

    public Long getUserId() {
        return ((AppUser)authAppService.loadUserByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal())).getId();
    }
}
