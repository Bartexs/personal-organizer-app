package barttek.projects.com.personalorganizerapp.userTaskFeature;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserNotFoundExceptionTest {


    @Test
    void UserNotFoundException() {
        UserNotFoundException exception = assertThrows(
                UserNotFoundException.class,
                () -> {
                    throw new UserNotFoundException("a message");
                }
        );

        assertEquals("a message", exception.getMessage());
    }
}