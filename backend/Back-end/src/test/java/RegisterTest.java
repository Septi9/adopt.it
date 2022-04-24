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
        System.setProperty("webdriver.chrome.driver", "D:\\BazaIT\\chromedriver.exe");

        webDriver = new ChromeDriver();
        webDriver.navigate().to("http://localhost:4200/");

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
        email.sendKeys("test6@gmail.com");
        WebElement username = webDriver.findElement(By.name("username"));
        username.sendKeys("Test6");
        WebElement password = webDriver.findElement(By.name("accountPassword"));
        password.sendKeys("test6");
        WebElement cpassword = webDriver.findElement(By.name("caccountPassword"));
        cpassword.sendKeys("test6");
        WebElement button = webDriver.findElement(By.className("confirm"));
        button.click();
    }

}
