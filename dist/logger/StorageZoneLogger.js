"use strict";
exports.__esModule = true;
exports.StorageZoneLogger = void 0;
var StorageZoneLogger = /** @class */ (function () {
    function StorageZoneLogger() {
        this.storageZoneEmployeeCardInfo = [];
        this.storageEmployeeNumber = 0;
    }
    StorageZoneLogger.prototype.addEmployee = function (cardInfo) {
        if (this.storageEmployeeNumber === undefined) {
            this.storageEmployeeNumber = 1;
        }
        else {
            this.storageEmployeeNumber++;
        }
        this.storageZoneEmployeeCardInfo.push(cardInfo);
        if (cardInfo.cardType !== "janitor") {
            this.setNonJanitorPresent(true);
        }
    };
    StorageZoneLogger.prototype.removeEmployee = function (cardNo) {
        var _this = this;
        if (this.storageEmployeeNumber === 0) {
            throw new Error("There is no employee to remove").message.toUpperCase();
        }
        else {
            this.storageEmployeeNumber--;
            this.storageZoneEmployeeCardInfo.forEach(function (value, index) {
                if (value.cardNo === cardNo) {
                    _this.storageZoneEmployeeCardInfo.splice(index, 1);
                    console.log(index);
                }
            });
        }
    };
    StorageZoneLogger.prototype.getEmployee = function () {
        return this.storageZoneEmployeeCardInfo;
    };
    StorageZoneLogger.prototype.setNonJanitorPresent = function (status) {
        StorageZoneLogger.isNonJanitorPresent = status;
    };
    StorageZoneLogger.getNonJanitorPresent = function () {
        return StorageZoneLogger.isNonJanitorPresent;
    };
    StorageZoneLogger.isNonJanitorPresent = false;
    return StorageZoneLogger;
}());
exports.StorageZoneLogger = StorageZoneLogger;
