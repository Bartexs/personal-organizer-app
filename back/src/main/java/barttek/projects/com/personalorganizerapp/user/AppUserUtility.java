package barttek.projects.com.personalorganizerapp.user;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AppUserUtility {
    private final AuthAppService authAppService;

    @Autowired
    public AppUserUtility(AuthAppService authAppService) {
        this.authAppService = authAppService;
    }

    public Long getAppUserId() {
        return ((AppUser)authAppService.loadUserByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal())).getId();
    }
}
