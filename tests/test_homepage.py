from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Optional: set path to ChromeDriver if needed
# service = Service(executable_path="/usr/local/bin/chromedriver")

options = Options()
options.add_argument("--headless")  # Run in headless mode
driver = webdriver.Chrome(options=options)

try:
    driver.get("http://localhost:3000")
    WebDriverWait(driver, 10).until(EC.title_contains("Portfolio"))

    title = driver.title
    print("Page title is:", title)

    assert "Portfolio | A Guy With a Laptop" == title
    print("✅ Test passed!")

except AssertionError:
    print("❌ Test failed: title did not match")
except Exception as e:
    print("❌ Unexpected error:", str(e))
finally:
    driver.quit()
