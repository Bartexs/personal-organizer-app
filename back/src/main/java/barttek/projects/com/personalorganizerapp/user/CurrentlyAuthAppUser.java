package barttek.projects.com.personalorganizerapp.user;

import org.springframework.stereotype.Component;

@Component("authenticatedAppUser")
public class CurrentlyAuthAppUser {
    AppUser appUser;

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
