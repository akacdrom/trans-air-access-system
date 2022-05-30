"use strict";
exports.__esModule = true;
exports.ZoneCreator = void 0;
var AirStripZone_1 = require("./AirStripZone");
var SortingZone_1 = require("./SortingZone");
var StorageZone_1 = require("./StorageZone");
var LoadUnloadZone_1 = require("./LoadUnloadZone");
var OutsideZone_1 = require("./OutsideZone");
var ZoneCreator = /** @class */ (function () {
    function ZoneCreator() {
    }
    ZoneCreator.createZone = function (zone, zoneEmpCount) {
        if (zone.zoneName === "AirStripZoneState" &&
            (zone.zoneEmployeeCard === "airStrip" ||
                zone.zoneEmployeeCard === "manager")) {
            var airStripZone = new AirStripZone_1.AirStripZone(zone.zoneName, zone.zoneEmployeeCard, zoneEmpCount);
            return airStripZone;
        }
        else if (zone.zoneName === "SortingZoneState" &&
            (zone.zoneEmployeeCard === "sorter" ||
                zone.zoneEmployeeCard === "airStrip" ||
                zone.zoneEmployeeCard === "manager" ||
                zone.zoneEmployeeCard === "janitor")) {
            var sortingZone = new SortingZone_1.SortingZone(zone.zoneName, zone.zoneEmployeeCard, zoneEmpCount);
            return sortingZone;
        }
        else if (zone.zoneName === "StorageZoneState" &&
            (zone.zoneEmployeeCard === "sorter" ||
                zone.zoneEmployeeCard === "manager" ||
                zone.zoneEmployeeCard === "janitor")) {
            var storageZone = new StorageZone_1.StorageZone(zone.zoneName, zone.zoneEmployeeCard, zoneEmpCount);
            return storageZone;
        }
        else if (zone.zoneName === "LoadUnloadZoneState") {
            var loadUnloadZone = new LoadUnloadZone_1.LoadUnloadZone(zone.zoneName, zone.zoneEmployeeCard, zoneEmpCount);
            return loadUnloadZone;
        }
        else if (zone.zoneName === "OutsideZoneState") {
            var outsideZone = new OutsideZone_1.OutsideZone(zone.zoneName);
            return outsideZone;
        }
        else {
            throw new Error("Access denied!").message.toUpperCase();
        }
    };
    return ZoneCreator;
}());
exports.ZoneCreator = ZoneCreator;
