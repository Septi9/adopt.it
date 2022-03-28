package Application.repository;

import Application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

    User findByEmailId(String emailId);

//    User findByEmailIdAndPassword(String emailId, String accountPassword);


}
