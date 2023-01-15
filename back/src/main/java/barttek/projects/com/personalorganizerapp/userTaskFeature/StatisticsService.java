package barttek.projects.com.personalorganizerapp.userTaskFeature;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import barttek.projects.com.personalorganizerapp.user.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {
    @Autowired
    AuthAppService authAppService;

    public Statistics getSummary() {
        Long userId = this.getAppUserId();
        Statistics statsSummary = new Statistics();
        return statsSummary;
    }

    public Long getAppUserId() {
        Long id = ((AppUser)authAppService.loadUserByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal())).getId();
        return id;
    }
}
