package Application.controller;

import Application.model.User;
import Application.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @PostMapping ("/registeruser")
//    @CrossOrigin(origins = "http://localhost:4200")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public User registerUser(@RequestBody User user) throws Exception {

        String tempEmailId = user.getEmailId();
        if(tempEmailId != null && !"".equals(tempEmailId)){

           User userObj = service.fetchUserByEmailId(tempEmailId);
           if(userObj != null){
               throw new Exception("user with " + tempEmailId + "is already exist");
           }
        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    @PostMapping("/login")
//    @CrossOrigin(origins = "http://localhost:4200")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public User loginUser (@RequestBody User user) throws Exception{

        String tempEmailId = user.getEmailId();
        String tempPassword = user.getAccountPassword();

        User userObj = null;

        if(tempEmailId != null && tempPassword != null){
           userObj = service.fetchUserByEmailIdAndPassword(tempEmailId,tempPassword);
        }

        if(userObj == null) {
            throw new Exception("Bad credentials.");

        }

        return userObj;

    }
//
//    @GetMapping("/adopt")
//    @CrossOrigin(origins = "*", allowedHeaders = "*")
//    public User getAll(@RequestBody User user) throws Exception {
//        String tempEmailId = user.getEmailId();
//        return service.fetchUserByEmailId(tempEmailId);
//    }


}
