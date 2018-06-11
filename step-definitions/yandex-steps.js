/* eslint-disable no-trailing-spaces */
module.exports = function () {
    this.setDefaultTimeout(120 * 1000);

    this.Given(/^Login to Yandex \("([^"]*)"\) \(login: "([^"]*)", password: "([^"]*)"\)\.$/, function (url, login, password) {
        helpers.loadPage(url).then(function() {
            page.yandexLogin.signIn(login, password);
        });
    });

    this.When(/^Check email user name "([^"]*)"\.$/, function (expectedEmailUserName) {
        page.yandexEmailManager.checkMailUserName(expectedEmailUserName);
    });

    this.When(/^Compose email to "([^"]*)", with header: "([^"]*)" and text: "([^"]*)"\.$/, function (sendTo, header, emailContent) {
        page.yandexEmailManager.openEmailForm();
        page.emailForm.sendEmail(sendTo, header, emailContent);

        driver.sleep(shared.constantsData.fourSecondsTimeOut);
        page.yandexEmailManager.openPageInbox();
    });

    this.When(/^Check exist email by header "([^"]*)" is exist - ([^"]*)\.$/, function (substring, isExist) {
        page.yandexEmailManager.checkContainTextInFirstEmailRow(substring, helpers.stringToBoolean(isExist));
    });

    this.Then("Delete all emails.", function () {
        page.yandexEmailManager.deleteAllEmails();
        driver.sleep(shared.constantsData.fourSecondsTimeOut);
    });
};
