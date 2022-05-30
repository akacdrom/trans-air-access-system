"use strict";
exports.__esModule = true;
exports.LoadUnloadZoneLogger = void 0;
var LoadUnloadZoneLogger = /** @class */ (function () {
    function LoadUnloadZoneLogger() {
        this.loadUnloadZoneEmployeeCardInfo = [];
        this.loadUnloadEmployeeNumber = 0;
    }
    LoadUnloadZoneLogger.prototype.addEmployee = function (cardInfo) {
        this.loadUnloadEmployeeNumber++;
        this.loadUnloadZoneEmployeeCardInfo.push(cardInfo);
        if (cardInfo.cardType !== "janitor") {
            this.setNonJanitorPresent(true);
        }
    };
    LoadUnloadZoneLogger.prototype.removeEmployee = function (cardNo) {
        var _this = this;
        if (this.loadUnloadEmployeeNumber === 0) {
            throw new Error("There is no employee to remove").message.toUpperCase();
        }
        else {
            this.loadUnloadEmployeeNumber--;
            this.loadUnloadZoneEmployeeCardInfo.forEach(function (value, index) {
                if (value.cardNo === cardNo) {
                    _this.loadUnloadZoneEmployeeCardInfo.splice(index, 1);
                }
            });
        }
    };
    LoadUnloadZoneLogger.prototype.getEmployee = function () {
        return this.loadUnloadZoneEmployeeCardInfo;
    };
    LoadUnloadZoneLogger.prototype.setNonJanitorPresent = function (status) {
        LoadUnloadZoneLogger.isNonJanitorPresent = status;
    };
    LoadUnloadZoneLogger.getNonJanitorPresent = function () {
        return LoadUnloadZoneLogger.isNonJanitorPresent;
    };
    LoadUnloadZoneLogger.isNonJanitorPresent = false;
    return LoadUnloadZoneLogger;
}());
exports.LoadUnloadZoneLogger = LoadUnloadZoneLogger;
