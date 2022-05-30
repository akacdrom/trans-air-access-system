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
exports.SortingZone = void 0;
var ConcreteZone_1 = require("./ConcreteZone");
var SortingZoneLogger_1 = require("../logger/SortingZoneLogger");
var SortingZone = /** @class */ (function (_super) {
    __extends(SortingZone, _super);
    function SortingZone(zoneName, zoneEmployeeCard, zoneEmpCount) {
        var _this = _super.call(this) || this;
        _this.zoneName = zoneName;
        _this.zoneEmployeeCard = zoneEmployeeCard;
        _this.zoneEmpCount = zoneEmpCount;
        return _this;
    }
    SortingZone.prototype.enterZone = function () {
        if (this.zoneEmpCount < 7) {
            if ((this.zoneEmployeeCard === "janitor" &&
                SortingZoneLogger_1.SortingZoneLogger.getNonJanitorPresent()) ||
                this.zoneEmployeeCard !== "janitor") {
                console.log("Access granted, entered the ".concat(this.zoneName, " zone"));
            }
            else {
                throw new Error("Janitor access denied!\nJanitor cannot be alone, or only with janitor in the same zone").message.toUpperCase();
            }
        }
        else {
            throw new Error("Limit is reached. Zone has ".concat(this.zoneEmpCount, " number of employees.")).message.toUpperCase();
        }
    };
    return SortingZone;
}(ConcreteZone_1.ConcreteZone));
exports.SortingZone = SortingZone;
