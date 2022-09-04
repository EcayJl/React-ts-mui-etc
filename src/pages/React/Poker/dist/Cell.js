"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardMap_1 = require("./CardMap");
//пошел на этот хак со стилями просто не найдя другого решения, ради скорости.
// инлайном стили задал, поскольку лучше выхода не нашел, перепробовал более техничные подходы но не подошли.
var Cell = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: CardMap_1["default"].get(props.cardName.toString()), style: {
                width: "200px",
                height: "300px",
                backgroundSize: "cover",
                flex: "1 1 auto",
                margin: "0 5px"
            } })));
};
exports["default"] = Cell;
