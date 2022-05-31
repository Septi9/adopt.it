import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {

    private WebDriver webDriver;

    private int waitLimit = 8000;

    @BeforeMethod
    public void before() {

//        System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/");
        System.setProperty("webdriver.gecko.driver","src/test/resources/driver/geckodriver.exe");
//        WebDriverManager.chromedriver().setup();
        webDriver = new FirefoxDriver();
        webDriver.navigate().to("https://adoptit-site.azurewebsites.net/");

    }

    @AfterMethod
    public void after() throws InterruptedException {
//        webDriver.close();
        webDriver.quit();
    }

    @Test
    public void method(){
        WebElement hamburger = webDriver.findElement(By.className("toggler"));
        hamburger.click();
        try{
            Thread.sleep(waitLimit);
        }catch(InterruptedException e){

        }
        WebElement loginButton = webDriver.findElement(By.className("login"));
        loginButton.click();
        WebElement email = webDriver.findElement(By.name("email"));
        email.sendKeys("jan@wp.pl");
        WebElement password = webDriver.findElement(By.name("accountPassword"));
        password.sendKeys("haslo123");
        WebElement button = webDriver.findElement(By.className("confirm"));
        button.click();
    }

}
