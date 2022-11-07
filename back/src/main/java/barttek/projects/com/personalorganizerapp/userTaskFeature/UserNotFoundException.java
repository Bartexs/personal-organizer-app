package barttek.projects.com.personalorganizerapp.userTaskFeature;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
