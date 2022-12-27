package barttek.projects.com.personalorganizerapp.user;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class AppUserSettingsConfig implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private final AppUserAppearanceConfig appUserAppearanceConfig;

    public AppUserSettingsConfig() {
        this.appUserAppearanceConfig = new AppUserAppearanceConfig();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUserAppearanceConfig getAppUserAppearanceConfig() {
        return appUserAppearanceConfig;
    }
}
