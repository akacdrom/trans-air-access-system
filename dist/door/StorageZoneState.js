"use strict";
exports.__esModule = true;
exports.StorageZoneState = void 0;
var StorageZoneState = /** @class */ (function () {
    function StorageZoneState(door) {
        this.door = door;
    }
    StorageZoneState.prototype.doorZero = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorOne = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorTwo = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorThree = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorFour = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorFive = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorSix = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    StorageZoneState.prototype.doorSeven = function () {
        console.log("Trying to open the door of the Sorting zone");
        this.door.setState(this.door.sortingZoneState);
    };
    return StorageZoneState;
}());
exports.StorageZoneState = StorageZoneState;
