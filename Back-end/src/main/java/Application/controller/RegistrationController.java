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

//    @PostMapping("login")
//    public User loginUser(@RequestBody User user) throws Exception{
//
//        String tempEmailId = user.getEmailId();
//        String tempPass = user.getAccountPassword();
//
//        User userObj = null;
//
//        if(tempEmailId != null && tempPass != null) {
//            userObj = service.fetchUserByEmailIdAndPassword(tempEmailId,tempPass);
//        }
//        if(userObj == null) {
//            throw new Exception("Bad credentials");
//        }
//        return userObj;
//    }

}
