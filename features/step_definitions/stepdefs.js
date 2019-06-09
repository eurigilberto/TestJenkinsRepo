const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function is_it_monday(today){
    return today === "monday" ? "yeah" : "naaa";
}

Given('today is {string}', function (day) {
    this.today = day.toLowerCase();
});

When('I ask weather it\'s Monday yet', function () {
    this.actualAnswer = is_it_monday(this.today);
});

Then('I should be told {string}', function (expected) {
    assert.equal(this.actualAnswer, expected)
});