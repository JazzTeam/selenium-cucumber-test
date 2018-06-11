/* eslint-disable no-undef */
module.exports = {

    elements: {
        userToField: by.xpath('//*[@id="nb-1"]/body/div[2]/div[3]/div/div[3]/div[3]/div[2]/div[5]/div/div[1]/div[2]/div[1]/div/div[1]/label/div[3]/div'),
        headerField: by.xpath('//*[@id="nb-1"]/body/div[2]/div[3]/div/div[3]/div[3]/div[2]/div[5]/div/div[1]/div[2]/div[1]/div/label/div[3]/input'),
        mailContent: by.css('#cke_1_contents > div'),
        sendMailButton: by.css('.ui-button-text-only')
    },

    sendEmail: function (sendTo, header, mailContent) {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);

        driver.findElement(page.emailForm.elements.userToField).sendKeys(sendTo);
        driver.findElement(page.emailForm.elements.headerField).sendKeys(header);
        driver.findElement(page.emailForm.elements.mailContent).sendKeys(mailContent);

        driver.findElement(page.emailForm.elements.sendMailButton).click();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
    }

};
