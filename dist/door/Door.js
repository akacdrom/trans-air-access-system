"use strict";
exports.__esModule = true;
exports.Door = void 0;
var OutsideZoneState_1 = require("./OutsideZoneState");
var LoadUnloadZoneState_1 = require("./LoadUnloadZoneState");
var SortingZoneState_1 = require("./SortingZoneState");
var AirStripZoneState_1 = require("./AirStripZoneState");
var StorageZoneState_1 = require("./StorageZoneState");
var Door = /** @class */ (function () {
    function Door() {
        this.outsideZoneState = new OutsideZoneState_1.OutsideZoneState(this);
        this.loadUnloadZoneState = new LoadUnloadZoneState_1.LoadUnloadZoneState(this);
        this.sortingZoneState = new SortingZoneState_1.SortingZoneState(this);
        this.airStripZoneState = new AirStripZoneState_1.AirStripZoneState(this);
        this.storageZoneState = new StorageZoneState_1.StorageZoneState(this);
        this.setState(this.outsideZoneState);
    }
    Door.prototype.setState = function (state) {
        this.currentState = state;
    };
    Door.prototype.getCurrentState = function () {
        return this.currentState;
    };
    return Door;
}());
exports.Door = Door;
