import { test,Page } from '@playwright/test'    //  "Page" is one of the type 
let rbg:Function = async ({ page }) =>     //rbg variable type is Function type so assiging the one type of function in all Functions , so typescript doesn't understood which type of function will be take at compile time it throws error
    {
    let userId: string = 'RBG technologies';   
    console.log(`This is demo at ${userId} for new batch`);
   
    await page.goto("http://gmail.com");
    await page.fill('#identifierId', userId);
    await page.pause();
   
    console.log('This is demo at ${userId} for new batch');
}

let rbg1 = async(page:{page:Page}) =>{

}
 
let rbg2 = () =>     //here we are not passing any parameters 
    {
    let userId: string = 'RBG technologies';
       
    console.log('This is demo at ${userId} for new batch');
}
 
function displayA():void
{
   
}

test("Rbg demo",rbg)   
 
test("RBG demo", rbg2 )   //it doesn't effect 
 
test("RBG demo2", displayA );



/*   Different types of functions 
()=>{}

function displayB():void{

}

function displayC(a:number,b:string):void{

}

function displayD():number{

    return 10;

}

function displayE(a:number):number{

    return 10;

}

test('verify ',async({page})=>{

})


let name:string = "reshma" ; 

*/

/*
test("Demo", async ({ page }) => {

});

const page = await browser.newPage();

callback(                       //playwright creates it's own object at compile time
{                          
    page: page,                     //this is a object
    context: context,
    browser: browser
}
);

                 {page}
let rbg1 = async ( obj ) => {

}

async (obj: { page: Page }) => {

}

({ page }: { page: Page })
   │              │
   │              └── Type (Playwright Page)
   │
   └── Property extracted from the object


student
│
▼
{
   name: "Reshma",
   age: 22
}

↓

const { name, age } = student    ----{page,context,browser}

↓

name = "Reshma"
age = 22

*/  




