package SeleniumTesting;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;



class Demo {
	
	 private static WebDriver driver;
	 private static String baseUrl;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.setProperty("webdriver.chrome.driver", "/Users/hanjalicharis/Desktop/IBU 2020/2021/6. Semester/Software Engineering/Project Tools/chromedriver.exe");
		driver = new ChromeDriver();
		baseUrl="http://hanjaries.netlify.app";
	}
	
	@AfterAll
   static void close() throws Exception {
		Thread.sleep(2000);
		driver.close();
	}
	
	// Test that tests the login button
	// If user is logged in, please logout
	 
	@Test
	void loginButtonTest() throws InterruptedException {
		driver.get(baseUrl);
		driver.manage().window().maximize();
		
		WebElement loginButton = driver.findElement(By.xpath("//button[@id='NavbarLogin']"));
		loginButton.click();
		Thread.sleep(1000);
		
		String expectedUrl = "http://hanjaries.netlify.app/auth";
		assertEquals(expectedUrl,driver.getCurrentUrl());
		
	}
	
	// Test that will login you in
	// In case you are already logged in, please logout then run this test
	
	@Test
	void testLogin() throws InterruptedException {
		driver.get(baseUrl);
		driver.manage().window().maximize();

		WebElement loginButton = driver.findElement(By.xpath("//button[@id='NavbarLogin']"));
		loginButton.click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='email']").sendKeys('aldin@ibu.com');"
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='password']").sendKeys('aldin');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//Button[@id='LoginButton']")).click();
		Thread.sleep(1000);
		
		String expectedUrl = "http://hanjaries.netlify.app";
		assertEquals(expectedUrl,driver.getCurrentUrl());
		
	}
	
	// Test that will create a new post (assuming you are not logged in, if you are logged in
	// and want to run this test, please delete lines (86-91)
	
	@Test
	void postCreationTest() throws InterruptedException {
		
		driver.get(baseUrl);
		driver.manage().window().maximize();
		
		WebElement loginButton = driver.findElement(By.xpath("//button[@id='NavbarLogin']"));
		loginButton.click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='email']").sendKeys('aldin@ibu.com');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='password']").sendKeys('aldin');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//Button[@id='LoginButton']")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@id='title']")).sendKeys('Aldin');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='tags']")).sendKeys('aldin, kovacevic');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//Button[@id='SubmitMemory']")).click();
		Thread.sleep(1000);
		
		String expectedUrl = "http://hanjaries.netlify.app";
		assertEquals(expectedUrl,driver.getCurrentUrl());
		
	}
	
	// Test that will test the functionality of the logout button
	// If user is already logged in, please remove lines (111-119)
	
	@Test
	void logoutButtonTest() throws InterruptedException {
		driver.get(baseUrl);
		driver.manage().window().maximize();
		
		WebElement loginButton = driver.findElement(By.xpath("//button[@id='NavbarLogin']"));
		loginButton.click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@name='email']").sendKeys('aldin@ibu.com');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='password']").sendKeys('aldin');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//Button[@id='LoginButton']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//Button[@id='LogoutButton']")).click();
		Thread.sleep(1000);
		
		String expectedUrl = "http://hanjaries.netlify.app";
		assertEquals(expectedUrl,driver.getCurrentUrl());
		
	}
	
	// Test that will test the functionality of show and hide password when signing in
	// We presume user is logged out
	// If not so, please logout, then run this test
	
	@Test
	void loginButtonTest() throws InterruptedException {
		driver.get(baseUrl);
		driver.manage().window().maximize();
		
		WebElement loginButton = driver.findElement(By.xpath("//button[@id='NavbarLogin']"));
		loginButton.click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@name='email']").sendKeys('aldin@ibu.com');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='password']").sendKeys('aldin');
		Thread.sleep(1000);
		driver.findElement(By.xpath("//Button[@id='ShowPasswordButton']")).click()
		Thread.sleep(2000);
		driver.findElement(By.xpath("//Button[@id='ShowPasswordButton']")).click()
		Thread.sleep(2000);
		
		
		String expectedUrl = "http://hanjaries.netlify.app/auth";
		assertEquals(expectedUrl,driver.getCurrentUrl());
		
	}
	
