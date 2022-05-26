package Application.controller;

import Application.model.Adoptions;
import Application.repository.AdoptionsRepository;
import Application.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdoptionsController {

    @Autowired
    private AdoptionsRepository adoptionsRepository;

    @GetMapping("/adoptions")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<Adoptions> getAllAdoptions() {
        return adoptionsRepository.findAll();
    }

}
