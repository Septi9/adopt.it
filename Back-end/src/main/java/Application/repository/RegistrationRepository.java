package Application.repository;

import Application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

    public User findByEmailId(String emailId);
    public User findByEmailIdAndAccountPassword(String emailId, String password);




}
