package barttek.projects.com.personalorganizerapp.user;

import barttek.projects.com.personalorganizerapp.security.AuthAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;

    @GetMapping("/settings")
    public ResponseEntity<AppUserSettingsConfig> appUserSettingsConfig() {
        AppUserSettingsConfig appUserSettingsConfig = appUserService.getAppUserSettingsConfig();
        return new ResponseEntity<>(appUserSettingsConfig, HttpStatus.OK);
    }

    @GetMapping("/settings/appearance")
    public ResponseEntity<AppUserAppearanceConfig> appUserAppearanceConfigResponseEntity() {
        AppUserAppearanceConfig appUserAppearanceConfig = appUserService.getAppUserAppearanceConfig();
        return new ResponseEntity<>(appUserAppearanceConfig, HttpStatus.OK);
    }
}
