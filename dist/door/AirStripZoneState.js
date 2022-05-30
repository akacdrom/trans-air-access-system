"use strict";
exports.__esModule = true;
exports.AirStripZoneState = void 0;
var AirStripZoneState = /** @class */ (function () {
    function AirStripZoneState(door) {
        this.door = door;
    }
    AirStripZoneState.prototype.doorZero = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorOne = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorTwo = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorThree = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorFour = function () {
        console.log("Trying to open the door of the Sorting zone");
        this.door.setState(this.door.sortingZoneState);
    };
    AirStripZoneState.prototype.doorFive = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorSix = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    AirStripZoneState.prototype.doorSeven = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    return AirStripZoneState;
}());
exports.AirStripZoneState = AirStripZoneState;
