"use strict";
exports.__esModule = true;
exports.SortingZoneState = void 0;
var SortingZoneState = /** @class */ (function () {
    function SortingZoneState(door) {
        this.door = door;
    }
    SortingZoneState.prototype.doorZero = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    SortingZoneState.prototype.doorOne = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    SortingZoneState.prototype.doorTwo = function () {
        console.log("Trying to open the door of the Unload/Load zone");
        this.door.setState(this.door.loadUnloadZoneState);
    };
    SortingZoneState.prototype.doorThree = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    SortingZoneState.prototype.doorFour = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    SortingZoneState.prototype.doorFive = function () {
        console.log("Trying to open the door of the Air-Strip zone");
        this.door.setState(this.door.airStripZoneState);
    };
    SortingZoneState.prototype.doorSix = function () {
        console.log("Trying to open the door of the Storage zone");
        this.door.setState(this.door.storageZoneState);
    };
    SortingZoneState.prototype.doorSeven = function () {
        throw new Error("You cannot use this door from your state!").message.toUpperCase();
    };
    return SortingZoneState;
}());
exports.SortingZoneState = SortingZoneState;
