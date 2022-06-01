package Application.service;

import Application.model.Adoptions;
import Application.repository.AdoptionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdoptionsService {

    @Autowired
    private AdoptionsRepository adoptionsRepository;

    public Adoptions saveAdoption(Adoptions adoptions){
        return adoptionsRepository.save(adoptions);
    }

    public Adoptions fetchAdoptionByEmail(String email){
        return adoptionsRepository.findByEmail(email);
    }
}
