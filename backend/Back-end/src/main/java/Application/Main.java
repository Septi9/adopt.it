package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Main implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @GetMapping("/")
    public String getFirst() {
        return "Strona ADOPT.IT!";
    }


    @GetMapping("adoptit-image")
    public String get() {
        return "Witamy na drugiej stronie";
    }

    @Override
    public void run(String... args) throws Exception {
//        String sql = "INSERT INTO users (first_name, last_name, email, account_password) VALUES (?, ?, ?, ?)";
//        int result = jdbcTemplate.update(sql, "Jan", "Kowalski", "jan@wp.pl", "haslo123");
//
//        if (result > 0){
//            System.out.println("A new row has been inserted");
//        }
    }
}
