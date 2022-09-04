"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var Cell_1 = require("./Cell");
var Button_1 = require("@mui/material/Button");
var Cell_module_css_1 = require("./Cell.module.css");
var Modal_1 = require("../../../components/common/Modal");
var context_1 = require("./context");
var CardEngine_1 = require("./CardEngine");
var GameEngine_1 = require("./GameEngine");
var PokerPage = function () {
    var _a = react_1.useState(CardEngine_1["default"].getBundleRenderArray()), cardStack = _a[0], setCardStack = _a[1];
    console.log(GameEngine_1["default"].isStraight(cardStack.mainArr), 'str');
    var _b = react_1.useState(0), bet = _b[0], setBet = _b[1];
    var _c = react_1.useState(500), poket = _c[0], setPoket = _c[1];
    var _d = react_1.useState(false), modalStatus = _d[0], setModalStatus = _d[1];
    var _e = react_1.useState("none"), isAlert = _e[0], setAlert = _e[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setAlert("none");
        }, 2300);
    }, [isAlert]);
    var _f = react_1.useState("downtime"), currentStep = _f[0], setCurrentStep = _f[1];
    var _g = react_1.useState([
        "zero",
        "zero",
        "zero",
        "zero",
        "zero",
    ]), cardsPool = _g[0], setCardsPool = _g[1];
    var setModalProxyDecorator = function () {
        modalStatus ? setModalStatus(false) : setModalStatus(true);
    };
    var setCurrentStepDecorator = function (stepName) {
        setCurrentStep(stepName);
    };
    react_1.useEffect(function () {
        setCardsPoolDecorator();
    }, [currentStep]);
    var setCardsPoolDecorator = function () {
        switch (currentStep) {
            case "flop":
                setCardsPool(cardStack.flopArr);
                break;
            case "turn":
                setCardsPool(cardStack.turnArr);
                break;
            case "river":
                setCardsPool(cardStack.mainArr);
                break;
        }
    };
    var DinamicBtn = function () {
        if (currentStep === "flop") {
            return (react_1["default"].createElement(Button_1["default"], { variant: "text", onClick: function () {
                    setCurrentStepDecorator("turn");
                } }, "Turn step"));
        }
        else if (currentStep === "turn") {
            return (react_1["default"].createElement(Button_1["default"], { variant: "text", onClick: function () {
                    setCurrentStepDecorator("river");
                } }, "River step"));
        }
        else {
            return (react_1["default"].createElement(Button_1["default"], { variant: "text", onClick: function () {
                    setCurrentStepDecorator("flop");
                } }, "Start game Flop step"));
        }
    };
    var cellElements = cardsPool.map(function (cardName) { return (react_1["default"].createElement(Cell_1["default"], { cardName: cardName, key: cardName === "zero" ? Math.random() : cardName })); });
    return (react_1["default"].createElement(context_1.Context.Provider, { value: {
            modalStatus: modalStatus,
            setModalProxyDecorator: setModalProxyDecorator
        } },
        react_1["default"].createElement("div", { className: "poker-container" },
            react_1["default"].createElement(material_1.Typography, { variant: "h2", sx: { p: 1.5 } }, "Minimal bet 100 \u20BD\uD83D\uDCB0"),
            react_1["default"].createElement(material_1.Typography, { sx: { p: 1.5 } }, "You can increase the BET at each step."),
            react_1["default"].createElement("div", { className: Cell_module_css_1["default"].cellRow }, cellElements),
            react_1["default"].createElement("div", { className: Cell_module_css_1["default"].pokerUi },
                react_1["default"].createElement(material_1.Typography, { variant: "h2", sx: { p: 1.5 } }, "Poket: 500 \u20BD\uD83D\uDCB0"),
                react_1["default"].createElement(material_1.Typography, { variant: "h2", sx: { p: 1.5 } },
                    "Bet: ",
                    bet,
                    " \u20BD"),
                react_1["default"].createElement(Button_1["default"], { variant: "text", className: Cell_module_css_1["default"].animated, sx: { mr: 1 }, onClick: function () {
                        console.log(modalStatus);
                        if (modalStatus === false) {
                            setModalStatus(true);
                        }
                        console.log(modalStatus);
                    } }, "Set Bet"),
                react_1["default"].createElement(DinamicBtn, null))),
        react_1["default"].createElement(Modal_1["default"], null,
            react_1["default"].createElement("div", null, "Enter your bet."),
            react_1["default"].createElement(material_1.TextField, { onChange: function (e) {
                    if (e.target.value === "") {
                        setBet(0);
                    }
                    Math.sign(+e.target.value) && e.target.value !== ""
                        ? setBet(+e.target.value)
                        : setAlert("block");
                }, id: "standard-basic", label: "my poket balance " + poket + " RUB", variant: "standard" }),
            react_1["default"].createElement(material_1.Alert, { sx: { mt: 2, display: "" + isAlert }, severity: "error" }, "Enter the available balance."))));
};
exports["default"] = PokerPage;
