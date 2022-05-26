package Application.repository;

import Application.model.Adoptions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptionsRepository extends JpaRepository<Adoptions, Integer> {

    public Adoptions findByEmail(String email);
}
