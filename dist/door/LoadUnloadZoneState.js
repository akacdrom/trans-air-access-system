"use strict";
exports.__esModule = true;
exports.LoadUnloadZoneState = void 0;
var LoadUnloadZoneState = /** @class */ (function () {
    function LoadUnloadZoneState(door) {
        this.door = door;
    }
    LoadUnloadZoneState.prototype.doorZero = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    LoadUnloadZoneState.prototype.doorOne = function () {
        console.log("Trying to open the door of the Outside zone");
        this.door.setState(this.door.outsideZoneState);
    };
    LoadUnloadZoneState.prototype.doorTwo = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    LoadUnloadZoneState.prototype.doorThree = function () {
        console.log("Trying to open the door of the Sorting zone");
        this.door.setState(this.door.sortingZoneState);
    };
    LoadUnloadZoneState.prototype.doorFour = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    LoadUnloadZoneState.prototype.doorFive = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    LoadUnloadZoneState.prototype.doorSix = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    LoadUnloadZoneState.prototype.doorSeven = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    return LoadUnloadZoneState;
}());
exports.LoadUnloadZoneState = LoadUnloadZoneState;
