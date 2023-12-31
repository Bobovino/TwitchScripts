function clickButtonByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE)
    const button = result.singleNodeValue
    if (button) {
        button.click()
    } else {
        console.log(`Button not found for XPath: ${xpath}`)
    }
}

// Repeat the process 2 times with a 500s delay
let counter = 0 
const interval = setInterval(() => {
    clickButtonByXPath('//*[@id="live-page-chat"]/div/div/div[2]/div/div/section/div/seventv-container/div/div[2]/div[2]/div[1]/div/div/div/div[1]/div[2]/button')
    clickButtonByXPath('//*[@id="channel-points-reward-center-body"]/div/div/div[6]/div/button')
    clickButtonByXPath('//*[@id="channel-points-reward-center-body"]/div/div/div[3]/div/button')

    counter++
    if (counter >= 10) {
        clearInterval(interval)
    }
}, 500) 
