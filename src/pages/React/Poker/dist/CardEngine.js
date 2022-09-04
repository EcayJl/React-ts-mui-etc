"use strict";
exports.__esModule = true;
var CardEngine = /** @class */ (function () {
    function CardEngine() {
    }
    CardEngine.getBundleRenderArray = function () {
        var mainArr = this.getNCards();
        console.log(mainArr, "lo");
        var flopArr = mainArr.slice(0, 3);
        var turnArr = mainArr.slice(0, 4);
        flopArr = flopArr.concat(["zero", "zero"]);
        turnArr = turnArr.concat(["zero"]);
        return {
            mainArr: mainArr,
            flopArr: flopArr,
            turnArr: turnArr
        };
    };
    CardEngine.getNCards = function (n) {
        if (n === void 0) { n = 5; }
        var arr = [];
        for (var i = 0; i < n; i++) {
            var currLink = this.getRandomStyleLink();
            if (arr.includes(currLink)) {
                while (arr.includes(currLink)) {
                    currLink = this.getRandomStyleLink();
                }
            }
            arr.push(currLink);
        }
        var result = [];
        Object.assign(result, arr);
        return result;
    };
    CardEngine.getRandomStyleLink = function () {
        var allLetters = ["b", "h", "k", "t"];
        var stackSize = 14;
        var rndLetter = allLetters[this.getRandomInt(0, 4)];
        var rndSize = this.getRandomInt(1, stackSize);
        return rndLetter + rndSize;
    };
    CardEngine.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return CardEngine;
}());
exports["default"] = CardEngine;
