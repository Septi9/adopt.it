import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class RegisterTest {

    private WebDriver webDriver;

    private int waitLimit = 3000;

    @BeforeMethod
    public void before() {
//        System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/");

//        WebDriverManager.chromedriver().setup();
        System.setProperty("webdriver.gecko.driver","src/test/resources/driver/geckodriver.exe");
        webDriver = new FirefoxDriver();
        webDriver.navigate().to("https://adoptit-site.azurewebsites.net/");

    }

    @AfterMethod
    public void after() {
        webDriver.quit();
    }

    @Test
    public void testRegister() {
        WebElement hamburger = webDriver.findElement(By.className("toggler"));
        hamburger.click();
        try{
            Thread.sleep(waitLimit);
        }catch(InterruptedException e){

        }
        WebElement registerButton = webDriver.findElement(By.className("register"));
        registerButton.click();
        WebElement email = webDriver.findElement(By.name("email"));
        email.sendKeys("test1@gmail.com");
        WebElement username = webDriver.findElement(By.name("username"));
        username.sendKeys("Test1");
        WebElement password = webDriver.findElement(By.name("accountPassword"));
        password.sendKeys("test1");
        WebElement cpassword = webDriver.findElement(By.name("caccountPassword"));
        cpassword.sendKeys("test1");
        WebElement button = webDriver.findElement(By.className("confirm"));
        button.click();
    }

}
