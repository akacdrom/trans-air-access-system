"use strict";
exports.__esModule = true;
exports.SortingZoneLogger = void 0;
var SortingZoneLogger = /** @class */ (function () {
    function SortingZoneLogger() {
        this.sortingZoneEmployeeCardInfo = [];
        this.sortingEmployeeNumber = 0;
    }
    SortingZoneLogger.prototype.addEmployee = function (cardInfo) {
        this.sortingEmployeeNumber++;
        this.sortingZoneEmployeeCardInfo.push(cardInfo);
        if (cardInfo.cardType !== "janitor") {
            this.setNonJanitorPresent(true);
        }
    };
    SortingZoneLogger.prototype.removeEmployee = function (cardNo) {
        var _this = this;
        if (this.sortingEmployeeNumber === 0) {
            throw new Error("There is no employee to remove").message.toUpperCase();
        }
        else {
            this.sortingEmployeeNumber--;
            this.sortingZoneEmployeeCardInfo.forEach(function (value, index) {
                if (value.cardNo === cardNo) {
                    _this.sortingZoneEmployeeCardInfo.splice(index, 1);
                }
            });
        }
    };
    SortingZoneLogger.prototype.getEmployee = function () {
        return this.sortingZoneEmployeeCardInfo;
    };
    SortingZoneLogger.prototype.setNonJanitorPresent = function (status) {
        SortingZoneLogger.isNonJanitorPresent = status;
    };
    SortingZoneLogger.getNonJanitorPresent = function () {
        return SortingZoneLogger.isNonJanitorPresent;
    };
    SortingZoneLogger.isNonJanitorPresent = false;
    return SortingZoneLogger;
}());
exports.SortingZoneLogger = SortingZoneLogger;
