
const puppeteer = require('puppeteer');

const webscraping = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://food.grab.com/ph/en/restaurants');
    // let btn = document.querySelector(".ant-btn ant-btn-block")
    // const searchBtn = await page.$x("//button[@type='button']");
    // searchBtn[0].click();

    // await page.click(pTags);
    // let result = [];
    const aTags = await page.$$('.RestaurantListCol___1FZ8V a')
    for (const aTag of aTags) {
        console.log(aTag,"link")
        // await aTag.click()

     }
   
    // console.log(aTags)
    // for(let i=0;i<aTags.length;i++){
    //     let x = aTags[i];
    //     await x.click()
    //     // page.waitForNavigation();
    // }
    // aTags[aTags.length-5].click();
    // console.log(aTags)
    // await page.click(aTags[0])

    
    // console.log(result)



    const Title = await page.evaluate(() => {

        return Array.from(
            document.querySelectorAll(".name___2epcT"),
            (element) => element.textContent
        )
    })



    // let y = await page.click('.RestaurantListCol___1FZ8V a');

    // console.log(y)


    // const a_elems = await page.evaluate(() => {

    //     return Array.from(
    //         document.querySelectorAll(".RestaurantListCol___1FZ8V a"),
    //         (element)=>element.href

    //     )
    // })
    // console.log(a_elems)

    const a_elems = await page.$$('.RestaurantListCol___1FZ8V a');


    // for (var i = 0; i < a_elems.length; i++) {                  // step-3
    //     const elem = a_elems[i];
    //     // elem.click()
    //     const href = await page.evaluate(e => e.href, elem);
    //     console.log(href)

    //     await page.click(`a[href='${href}']`);
    //     console.log("not break")
    //      page.on("request", async (request) => {
    //     let data = await request.initiator()
    //     if (data.url) {
    //         console.log(data.url)
    //         // result.push(data.url)
    //     } 
    // })


    //Chrome will return the absolute URL
    // const newPage = await browser.newPage();
    // await newPage.goto(href);
    // console.log(await newPage.Permission("geolocation"))



    // page.on("request", async (request) => {
    // let data = await request.initiator()
    // if (data.url) {
    //     console.log(data, "url")
    // }


    // })

    // await newPage.screenshot({ path: 'example.png' });
    //     // await newPage.screenshot({ path: `${IMG_FOLDER}/${txt}.png` });
    // await newPage.close();
    //     // console.log(`clicked link = ${txt}`);
    // }




    // await browser.close();
};
webscraping()