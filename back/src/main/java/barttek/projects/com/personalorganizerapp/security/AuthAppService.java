package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthAppService {
    private final AppUserRepository appUserRepository;

    @Autowired
    public AuthAppService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public AppUser registerNewAppUser(AppUser appUser) {
        return this.appUserRepository.save(appUser);
    }
}
