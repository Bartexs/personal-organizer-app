package barttek.projects.com.personalorganizerapp.user;

import barttek.projects.com.personalorganizerapp.userTaskFeature.UserTasksStatistics.UserTasksStatisticsSummary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "AppUser")
public class AppUser implements UserDetails, Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;
    private String password;
    @Enumerated
    private AppUserRole appUserRole;

    @OneToOne(cascade = CascadeType.ALL)
    private final AppUserSettingsConfig appUserSettingsConfig;

    @OneToOne(cascade = CascadeType.ALL)
    private UserTasksStatisticsSummary userTasksStatisticsSummary;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(appUserRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public AppUser() {
        this.appUserSettingsConfig = new AppUserSettingsConfig();
        this.userTasksStatisticsSummary = new UserTasksStatisticsSummary();
    }

    public AppUser(String name, String username, String password, AppUserRole appUserRole) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.appUserRole = appUserRole;
        this.appUserSettingsConfig = new AppUserSettingsConfig();
        this.userTasksStatisticsSummary = new UserTasksStatisticsSummary();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AppUserRole getAppUserRole() {
        return appUserRole;
    }

    public void setAppUserRole(AppUserRole appUserRole) {
        this.appUserRole = appUserRole;
    }

    public AppUserSettingsConfig getAppUserSettingsConfig() {
        return appUserSettingsConfig;
    }

    public UserTasksStatisticsSummary getUserTasksStatisticsSummary() {
        return userTasksStatisticsSummary;
    }

    public UserTasksStatisticsSummary setUserTasksStatisticsSummary(UserTasksStatisticsSummary userTasksStatisticsSummary) {
        return this.userTasksStatisticsSummary = userTasksStatisticsSummary;
    }


    @Override
    public String toString() {
        return "AppUser{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", appUserRole=" + appUserRole +
                ", appUserSettingsConfig=" + appUserSettingsConfig +
                ", userTasksStatisticsSummary=" + userTasksStatisticsSummary +
                '}';
    }
}
