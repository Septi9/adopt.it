import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {

    private WebDriver webDriver;

    @BeforeMethod
    public void before() {

//        System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
        WebDriverManager.chromedriver().setup();
        webDriver = new ChromeDriver();
        webDriver.navigate().to("https://adopt.azurewebsites.net/");

    }

    @AfterMethod
    public void after() throws InterruptedException {
        webDriver.close();
        webDriver.quit();
    }

    @Test
    public void method() {
        WebElement loginButton = webDriver.findElement(By.className("login"));
        loginButton.click();
        WebElement email = webDriver.findElement(By.name("email"));
        email.sendKeys("abc@wp.pl");
        WebElement password = webDriver.findElement(By.name("accountPassword"));
        password.sendKeys("nanaa");
        WebElement button = webDriver.findElement(By.className("confirm"));
        button.click();
    }

}
