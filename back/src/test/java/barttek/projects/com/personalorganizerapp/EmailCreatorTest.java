package barttek.projects.com.personalorganizerapp;

import org.junit.jupiter.api.Test;

import javax.mail.MessagingException;

import static org.junit.jupiter.api.Assertions.*;

class EmailCreatorTest {

    @Test
    void sendMail() throws MessagingException {
        EmailCreator creator = new EmailCreator();
        creator.createEmail();
    }

}