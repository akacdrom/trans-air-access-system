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
exports.AirStripZone = void 0;
var ConcreteZone_1 = require("./ConcreteZone");
var AirStripZone = /** @class */ (function (_super) {
    __extends(AirStripZone, _super);
    function AirStripZone(zoneName, zoneEmployeeCard, zoneEmpCount) {
        var _this = _super.call(this) || this;
        _this.zoneName = zoneName;
        _this.zoneEmployeeCard = zoneEmployeeCard;
        _this.zoneEmpCount = zoneEmpCount;
        return _this;
    }
    AirStripZone.prototype.enterZone = function () {
        if (this.zoneEmpCount < 3) {
            console.log("Access granted, entered the ".concat(this.zoneName, " zone"));
        }
        else {
            throw new Error("Limit is reached. Zone has ".concat(this.zoneEmpCount, " number of employees.")).message.toUpperCase();
        }
    };
    return AirStripZone;
}(ConcreteZone_1.ConcreteZone));
exports.AirStripZone = AirStripZone;
