const fs = require('fs');
const puppeteer = require('puppeteer');

const webscraping = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://food.grab.com/sg/en/restaurants');
    let count = 0;
    const searchBtn = await page.$x("//button[@type='button']");
    page.on("request", async (request) => {
        let data = await request.initiator()
        if (data.url) {
            console.log(data.url)
            // result.push(data.url)
        }
    })
    
    while (count < 50) {
        await searchBtn[0].click();
        count = count + 1;
       

    }

    fs.readFile("./data.json", 'utf8', async (err, data) => {

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
            res.send({ message: err })
        } else {

            const databases = JSON.parse(data);
            const Title = await page.evaluate(() => {

                return Array.from(
                    document.querySelectorAll(".RestaurantListCol___1FZ8V .name___2epcT"),
                    (element) => element.textContent
                )
            })
            const Href = await page.evaluate(() => {

                return Array.from(
                    document.querySelectorAll(".RestaurantListCol___1FZ8V a"),
                    (element) => element.href

                )
            })
            if (databases.Title.length !== 0) {
                databases.Title = []
                databases.Href = []

                fs.writeFile("./data.json", JSON.stringify(databases, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);

                    }
                });
            }
            databases.Title.push(Title)
            databases.Href.push(Href)

            // write new data back to the file

            fs.writeFile("./data.json", JSON.stringify(databases, null, 4), (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);

                }
            });




        }

    });


    // read the file
    





    page.on("request", async (request) => {
        let data = await request.initiator()
        if (data.url) {
            console.log(data)
        }

    })


    const a_elems = await page.$$('.RestaurantListCol___1FZ8V a');

    //   for (var i = 0; i < a_elems.length; i++) {                  // step-3
    //     const elem = a_elems[i];
    //     // elem.click()
    //     const href = await page.evaluate(e => e.href, elem);
    //     console.log(href)   

    //     }


    // })





    // console.log(Title)









    // await browser.close();





};
webscraping()