import {test} from '@playwright/test'

test("RBG demo", async ({ page }) =>  
{
    let userId: string = 'RBG technologies';
    console.log(`This is demo at ${userId} for new batch`);
   
    await page.goto("http://gmail.com");  
    await page.fill('#identifierId', userId);   
    await page.pause();
   
    console.log('This is demo at ${userId} for new batch');

})  


//which line of code browser will launch - in method we are passing the parameter as page and calling the method
// and website launch - giving url 
// entering the data   - fill method using