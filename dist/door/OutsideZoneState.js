"use strict";
exports.__esModule = true;
exports.OutsideZoneState = void 0;
var OutsideZoneState = /** @class */ (function () {
    function OutsideZoneState(door) {
        this.door = door;
    }
    OutsideZoneState.prototype.doorZero = function () {
        console.log("Trying to open the door of the Unload/Load zone");
        this.door.setState(this.door.loadUnloadZoneState);
    };
    OutsideZoneState.prototype.doorOne = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorTwo = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorThree = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorFour = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorFive = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorSix = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    OutsideZoneState.prototype.doorSeven = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    return OutsideZoneState;
}());
exports.OutsideZoneState = OutsideZoneState;
