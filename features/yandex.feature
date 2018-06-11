@search
Feature: Test automation scenarios of yandex
  Background:
    Given Login to Yandex ("https://yandex.by") (login: "test.ivanovich009@yandex.by", password: "q123456").
    When Check email user name "test.ivanovich009".

  Scenario: Case 1
    When Compose email to "test.ivanovich009@yandex.by", with header: "header1" and text: "text body".
    Then Check exist email by header "header1" is exist - true.
    When Delete all emails.
    Then Check exist email by header "header1" is exist - false.


