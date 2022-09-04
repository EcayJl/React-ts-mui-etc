"use strict";
exports.__esModule = true;
exports.Context = exports.defaultCtx = void 0;
var react_1 = require("react");
exports.defaultCtx = {
    bet: 500,
    modalStatus: false,
    toggleModal: function () {
        this.modalStatus = !this.modalStatus;
    }
};
exports.Context = react_1["default"].createContext(null);
