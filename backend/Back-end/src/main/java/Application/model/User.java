package Application.model;

import javax.persistence.*;

@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "emailId")
    private String emailId;
    @Column(name = "userName")
    private String userName;
    @Column(name = "accountPassword")
    private String accountPassword;

    public User() {
    }

    public User(int id, String emailId, String userName, String accountPassword) {
        this.id = id;
        this.emailId = emailId;
        this.userName = userName;
        this.accountPassword = accountPassword;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAccountPassword() {
        return accountPassword;
    }

    public void setAccountPassword(String accountPassword) {
        this.accountPassword = accountPassword;
    }
}
