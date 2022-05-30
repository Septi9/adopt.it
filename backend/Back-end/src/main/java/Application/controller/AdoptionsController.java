package Application.controller;

import Application.model.Adoptions;
import Application.repository.AdoptionsRepository;
import Application.service.AdoptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdoptionsController {

    @Autowired
    private AdoptionsRepository adoptionsRepository;

    @Autowired
    private AdoptionsService service;

    @GetMapping("/adoptions")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<Adoptions> getAllAdoptions() {
        return adoptionsRepository.findAll();
    }

    @PostMapping("/adoptions-post")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Adoptions> createAdoption(@RequestBody Adoptions adoptions) {
        try {
            Adoptions _adoptions = service.saveAdoption(new Adoptions(adoptions.getEmail(), adoptions.getAnimal()));
            return new ResponseEntity<>(_adoptions, HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<Adoptions>((Adoptions) null, HttpStatus.CREATED);
        }
    }

}
