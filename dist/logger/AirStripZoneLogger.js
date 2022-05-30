"use strict";
exports.__esModule = true;
exports.AirStripZoneLogger = void 0;
var AirStripZoneLogger = /** @class */ (function () {
    function AirStripZoneLogger() {
        this.airStripZoneEmployeeCardInfo = [];
        this.airStripEmployeeNumber = 0;
    }
    AirStripZoneLogger.prototype.addEmployee = function (cardInfo) {
        this.airStripEmployeeNumber++;
        this.airStripZoneEmployeeCardInfo.push(cardInfo);
    };
    AirStripZoneLogger.prototype.removeEmployee = function (cardNo) {
        var _this = this;
        if (this.airStripEmployeeNumber === 0) {
            throw new Error("There is no employee to remove").message.toUpperCase();
        }
        else {
            this.airStripEmployeeNumber--;
            this.airStripZoneEmployeeCardInfo.forEach(function (value, index) {
                if (value.cardNo === cardNo) {
                    _this.airStripZoneEmployeeCardInfo.splice(index, 1);
                    console.log(index);
                }
            });
        }
    };
    AirStripZoneLogger.prototype.getEmployee = function () {
        return this.airStripZoneEmployeeCardInfo;
    };
    return AirStripZoneLogger;
}());
exports.AirStripZoneLogger = AirStripZoneLogger;
