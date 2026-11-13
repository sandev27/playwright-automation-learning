import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
await page.goto('https://playground.bondaracademy.com/')
await page.getByText('Forms').click()
await page .getByText('Form Layouts').click()
})

test('Locator Syntax Rules', async ({page}) => {
    // find by Tag
    page.locator('input')
    
    //find by ID
    page.locator('#inputEmail')

    //find by class value
    page.locator('.shape-rectangle')

    //find by any attribute
    page.locator('[placeholder="Email"]')

    //find by full class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //find by several selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //find by partial text match
    page.locator(':text("Using")')

    //find by exact text match
    page.locator(':text("Using the Grid")')

})

test('User-Visible locators', async ({page}) => {
    await page.getByRole('button',{name: 'Sign in'}).first().click()
    await page.getByRole('textbox',{name: "Email"}).first().fill('test@test.com')
    await page.getByLabel('Email').first().fill('test@test.com')
    await page.getByPlaceholder('Jane Doe').fill('Artem Bonder')
    await page.getByText('Submit').first().click()
    await page.getByTestId('inputEmail1').fill('test@test.com')
    await page.getByTitle('IoT Dashboard').click()
})


test('Locating child elements', async ({page}) =>{
    await page.locator('nb-card').locator('nb-card-group').locator(':text-is("option 1")').click()
    await page.locator('nb-card nd-radio-group :text-is("Option 2")').click()
    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()
    await page.locator('nb-card').nth(3).getByRole('button').click()
    
})

test('Locating parent elements', async ({page}) => {
    await page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('button').click()
    await page.locator('nb-card',{has: page.locator('#inputEmail')}).getByRole('button').click()
    await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click()
    await page.locator('nb-card')
      .filter({has: page.locator('nb-checkbox')})
      .filter({hasText: 'Sign in'})
      .getByLabel('Email')
      .fill('test@test.com')
    await page.getByText('Using the Grid').locator('..').getByRole('button').click()

})

test('Reusing Locators', async ({page}) => {
   const basicFormSection = page.locator('nb-card', {hasText: 'Basic form'})
   const emailInputField = basicFormSection.getByLabel('Email')

   await emailInputField.fill('test@test.com')
   await basicFormSection.getByLabel('password').fill('playwright')
   await basicFormSection.locator('nb-checkbox').click()
   await basicFormSection.getByRole('button').click()
   
   expect(emailInputField).toHaveValue('test@test.com')
})

test('extracting values', async ({page}) => {
    //extracting values
    const basicFormSection = page.locator('nb-card',{hasText: 'Basic form'})
    const submitButtonText = await basicFormSection.getByRole('button').textContent()
    expect(submitButtonText).toBe('Submit')

    //extract multiple text values
    const allRadioButtonValues = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonValues).toContain('Option 1')
    
    //extract input field values
    const emailField =basicFormSection.getByRole('textbox', {name: 'Email'})
    await emailField.fill('test@test.com')
    const emailFieldValue = await emailField.inputValue()
    console.log(emailFieldValue)
})