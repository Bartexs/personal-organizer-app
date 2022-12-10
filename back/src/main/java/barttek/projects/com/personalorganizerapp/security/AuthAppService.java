package barttek.projects.com.personalorganizerapp.security;

import barttek.projects.com.personalorganizerapp.user.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
//
//@Service
//public class AuthAppService implements UserDetailsService {
//    private final AppUserRepository appUserRepository;
//
//    @Autowired
//    public AuthAppService(AppUserRepository appUserRepository) {
//        this.appUserRepository = appUserRepository;
//    }
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return null;
//    }
//
//    public AppUser registerNewAppUser(AppUser appUser) {
//        return this.appUserRepository.save(appUser);
//    }
//
//}
