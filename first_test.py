from playwright.sync_api import sync_playwright

with sync_playwright() as p:

    browser = p.chromium.launch(headless=False)

    page = browser.new_page()
    page.goto("https://www.saucedemo.com")
    page.locator("#user-name").fill("standard_user")
    page.locator("#password").fill("secret_sauce")
    page.locator("#login-button").click()
    products_heading = page.locator(".title").text_content()
    print(products_heading)
    assert products_heading == "Products"
    
    assert page.title() == "Swag Labs"
    print("✅ Login Successful")
    print("Page Title:", page.title())
    input("Press Enter to close the browser...")
    browser.close()
    #page.wait_for_timeout(20000)
    #browser.close()