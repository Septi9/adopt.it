import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class RegisterTest {

    private WebDriver webDriver;

    @BeforeMethod
    public void before() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");

//        WebDriverManager.chromedriver().setup();
        webDriver = new ChromeDriver();
        webDriver.navigate().to("https://adopt.azurewebsites.net/");

    }

    @AfterMethod
    public void after() {
        webDriver.close();
        webDriver.quit();
    }

    @Test
    public void testRegister() {
        WebElement registerButton = webDriver.findElement(By.className("register"));
        registerButton.click();
        WebElement email = webDriver.findElement(By.name("email"));
        email.sendKeys("test12@gmail.com");
        WebElement username = webDriver.findElement(By.name("username"));
        username.sendKeys("Test12");
        WebElement password = webDriver.findElement(By.name("accountPassword"));
        password.sendKeys("test12");
        WebElement cpassword = webDriver.findElement(By.name("caccountPassword"));
        cpassword.sendKeys("test12");
        WebElement button = webDriver.findElement(By.className("confirm"));
        button.click();
    }

}
