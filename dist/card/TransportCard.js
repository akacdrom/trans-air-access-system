"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TransportCard = void 0;
var ConcreteCard_1 = require("./ConcreteCard");
var TransportCard = /** @class */ (function (_super) {
    __extends(TransportCard, _super);
    function TransportCard(cardNo, cardName, cardType) {
        var _this = _super.call(this) || this;
        _this.cardNo = cardNo;
        _this.cardName = cardName;
        _this.cardType = cardType;
        return _this;
    }
    return TransportCard;
}(ConcreteCard_1.ConcreteCard));
exports.TransportCard = TransportCard;
