/* eslint-disable no-undef */
module.exports = {

    elements: {
        mailUserName: by.css('.mail-User-Name'),
        mailComposeButton: by.css('.mail-ComposeButton'),

        inboxMails: by.css('.mail-FolderList-Item_inbox'),

        firstRowMail: by.css('.mail-MessageSnippet-Wrapper'),
        selectAllCheckbox: by.css('.mail-Toolbar-Item-Checkbox'),
        deleteButton: by.css('.js-toolbar-item-delete'),
        confirmDeleteButton: by.css('.mail-MOPSConfirmation-popup ._nb-action-button'),
    },

    checkMailUserName: function (expectedName) {
        driver.sleep(shared.constantsData.threeSecondsTimeOut);
        driver.findElement(page.yandexEmailManager.elements.mailUserName).getText().then(function (actualName) {
            assert.equal(actualName, expectedName, 'actual userName does not match expected');
        });
    },

    checkContainTextInFirstEmailRow: function (substring, isExist) {
        driver.navigate().refresh();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.yandexEmailManager.elements.firstRowMail).getText().then(function (actualName) {
            assert.equal(actualName.includes(substring), isExist, 'actual userName does not match expected');
        }, function(err) {
            if (isExist) {
                webdriver.promise.rejected(err);
            }
        });
    },

    openEmailForm: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.yandexEmailManager.elements.mailComposeButton).click();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
    },

    openPageInbox: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.yandexEmailManager.elements.inboxMails).click();
    },
    
    deleteAllEmails: function () {
        driver.findElement(page.yandexEmailManager.elements.selectAllCheckbox).click();
        driver.findElement(page.yandexEmailManager.elements.deleteButton).click();

        driver.findElement(page.yandexEmailManager.elements.confirmDeleteButton).then(function(webElement) {
            webElement.click();
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('confirmDeleteButton not found');
            }
        });
    }
    

};
