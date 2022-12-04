package barttek.projects.com.personalorganizerapp.user;

public class AppUserUnregistered extends AppUser {
    private long id;
    private String accountName;

    public AppUserUnregistered(int id, String accountName) {
        this.id = id;
        this.accountName = accountName;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }
}
