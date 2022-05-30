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
exports.OutsideZone = void 0;
var ConcreteZone_1 = require("./ConcreteZone");
var OutsideZone = /** @class */ (function (_super) {
    __extends(OutsideZone, _super);
    function OutsideZone(zoneName) {
        var _this = _super.call(this) || this;
        _this.zoneName = zoneName;
        return _this;
    }
    OutsideZone.prototype.enterZone = function () {
        console.log("Access granted, entered the ".concat(this.zoneName, " zone"));
    };
    return OutsideZone;
}(ConcreteZone_1.ConcreteZone));
exports.OutsideZone = OutsideZone;
