//tageName[attribute = attributeValue]    - input[id='identifierId']     -[id='identifierId']   -for somewebsites use only tagName also 

//#id- AttributeValue   - #identifierId      - .whsOnd.zHQkBf(class attribute)

import {test} from '@playwright/test'

test("verify the locator" , async({page})=>{

    await page.goto("https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https://mail.google.com/mail&dsh=S-114427398:1783778969592507&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession")

    //const input_text = await page.locator('input[id="identifierId"]').fill('RBG Technologies')

    //const input_text = await page.locator('[id="identifierId"]').fill('RBG Technologies')

    const input_text = await page.locator('.whsOnd.zHQkBf').nth(0).fill('RBG Technologies')

    await page.pause();

})