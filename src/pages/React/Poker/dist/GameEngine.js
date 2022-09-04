"use strict";
exports.__esModule = true;
//на вынос из файла. в будущем планирую сделать работу с мастями иначе.
var SuitsArr = ["k", "b", "h", "t"];
// todo переписать все это в функционалочке
var PokerEngine = /** @class */ (function () {
    function PokerEngine() {
    }
    PokerEngine.getIncludesObj = function (arr) {
        var result = arr.reduce(function (acc, el) {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});
        return result;
    };
    PokerEngine.cutCardNumber = function (arr) {
        return arr.map(function (i) {
            return +i.substring(1);
        });
    };
    PokerEngine.getTrainCombinations = function (deck) {
        var arr = this.cutCardNumber(deck);
        var result = this.getIncludesObj(arr);
        var objValues = Object.values(result);
        return objValues;
    };
    PokerEngine.isPair = function (deck) {
        var objValues = this.getTrainCombinations(deck);
        var isDouble = objValues.includes(2);
        return isDouble ? true : false;
    };
    PokerEngine.isSet = function (deck) {
        var objValues = this.getTrainCombinations(deck);
        var isSet = objValues.includes(3);
        return isSet ? true : false;
    };
    PokerEngine.isTwoPair = function (deck) {
        var objValues = this.getTrainCombinations(deck);
        var result = this.getIncludesObj(objValues);
        return result[2] === 2 ? true : false;
    };
    PokerEngine.isFullHouse = function (deck) {
        return this.isSet(deck) && this.isTwoPair(deck) ? true : false;
    };
    PokerEngine.seniorCardCase = function (arr) {
        return {};
    };
    PokerEngine.isRoyalSet = function (deck) {
        var arr = this.cutCardNumber(deck);
        var metaArr = [1, 13, 12, 11, 10];
        var isAllTrue = [];
        for (var i = 0; i < metaArr.length; i++) {
            if (arr.includes(metaArr[i])) {
                isAllTrue.push(true);
            }
            else {
                isAllTrue.push(false);
            }
        }
        return isAllTrue.every(function (el) { return el === true; });
    };
    PokerEngine.isCare = function (arr) {
        var result = this.getIncludesObj(this.cutCardNumber(arr));
        if (result[1] === 4) {
            return true;
        }
        else {
            return false;
        }
    };
    PokerEngine.isRoyalFlush = function (deck) {
        if (this.isFlush(deck)) {
            return this.isRoyalSet(deck);
        }
        else {
            return false;
        }
    };
    PokerEngine.isStraight = function (deck) {
        var cutDeck = this.cutCardNumber(deck);
        var withoutAce = this.getIncludesObj(cutDeck);
        if (withoutAce[1] > 1) {
            return false;
        }
        else {
            cutDeck.splice(cutDeck.indexOf(1), 1);
            var sortDeck = cutDeck.sort(function (a, b) {
                return a - b;
            });
            console.log(sortDeck, "9879");
        }
    };
    PokerEngine.isFlush = function (deck) {
        var isFlush = [];
        var _loop_1 = function (i) {
            isFlush.push(deck.every(function (value) {
                value.includes(SuitsArr[i]);
            }));
        };
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
        if (isFlush.some(function (el) { return el === true; })) {
            return true;
        }
        else {
            return false;
        }
    };
    PokerEngine.staticCases = {
        metaRoyalCase: [1, 13, 12, 11, 10]
    };
    return PokerEngine;
}());
exports["default"] = PokerEngine;
