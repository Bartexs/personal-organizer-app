package barttek.projects.com.personalorganizerapp.user;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {
    @Autowired
    AuthAppService authAppService;

    protected AppUserAppearanceConfig getAppUserAppearanceConfig() {
        return this.loadUserFromDatabase().getAppUserSettingsConfig().getAppUserAppearanceConfig();
    }

    protected AppUserSettingsConfig getAppUserSettingsConfig() {
        return this.loadUserFromDatabase().getAppUserSettingsConfig();
    }

    private AppUser loadUserFromDatabase() {
        return (AppUser) authAppService.loadUserByUsername(this.getUsernameFromSecurityContent());
    }

    private String getUsernameFromSecurityContent() {
        return ((AppUser)authAppService.loadUserByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal())).getUsername();
    }

}
