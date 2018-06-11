module.exports = {
    elements: {
        entryButton: by.css('.desk-notif-card__login-enter-expanded'),
        login: by.name('login'),
        password: by.name('passwd'),
        submit: by.css('.passport-Button-Text')
    },

    signIn: function (login, password) {
        driver.findElement(page.yandexLogin.elements.entryButton).click();

        driver.findElement(page.yandexLogin.elements.login).sendKeys(login);
        driver.findElement(page.yandexLogin.elements.password).sendKeys(password);
        driver.findElement(page.yandexLogin.elements.submit).click();
    }
};
