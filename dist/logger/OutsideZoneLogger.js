"use strict";
exports.__esModule = true;
exports.OutsideZoneLogger = void 0;
var OutsideZoneLogger = /** @class */ (function () {
    function OutsideZoneLogger() {
        this.outsideZoneEmployeeCardInfo = [];
        this.outsideEmployeeNumber = 0;
    }
    OutsideZoneLogger.prototype.addEmployee = function (cardInfo) {
        this.outsideEmployeeNumber++;
        this.outsideZoneEmployeeCardInfo.push(cardInfo);
    };
    OutsideZoneLogger.prototype.removeEmployee = function (cardNo) {
        var _this = this;
        if (this.outsideEmployeeNumber === 0) {
            throw new Error("There is no employee to remove").message.toUpperCase();
        }
        else {
            this.outsideEmployeeNumber--;
            this.outsideZoneEmployeeCardInfo.forEach(function (value, index) {
                if (value.cardNo === cardNo) {
                    _this.outsideZoneEmployeeCardInfo.splice(index, 1);
                }
            });
        }
    };
    OutsideZoneLogger.prototype.getEmployee = function () {
        return this.outsideZoneEmployeeCardInfo;
    };
    return OutsideZoneLogger;
}());
exports.OutsideZoneLogger = OutsideZoneLogger;
