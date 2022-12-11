package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import barttek.projects.com.personalorganizerapp.user.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
//
@Service
public class AuthAppService implements UserDetailsService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return appUserRepository.findAppUserByUsername(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(email)));
    }

    public AppUser registerNewAppUser(AppUser appUser) {
        return this.appUserRepository.save(appUser);
    }

}
