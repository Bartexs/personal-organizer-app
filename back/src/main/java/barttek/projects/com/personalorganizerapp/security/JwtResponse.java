package barttek.projects.com.personalorganizerapp.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public record JwtResponse(String access_token, String refresh_token) {
}
