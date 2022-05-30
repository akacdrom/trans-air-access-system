"use strict";
exports.__esModule = true;
var ZoneCreator_1 = require("./zone/ZoneCreator");
var OutsideZoneLogger_1 = require("./logger/OutsideZoneLogger");
var LoadUnloadZoneLogger_1 = require("./logger/LoadUnloadZoneLogger");
var SortingZoneLogger_1 = require("./logger/SortingZoneLogger");
var StorageZoneLogger_1 = require("./logger/StorageZoneLogger");
var AirStripZoneLogger_1 = require("./logger/AirStripZoneLogger");
var __Employee_1 = require("./__test/__Employee");
var employees = new __Employee_1.Employee();
var employee = employees.employee();
var employee2 = employees.employee2();
var employee3 = employees.employee3();
var employee4 = employees.employee4();
var outsideZoneLogger = new OutsideZoneLogger_1.OutsideZoneLogger();
var loadUnloadZoneLogger = new LoadUnloadZoneLogger_1.LoadUnloadZoneLogger();
var sortingZoneLogger = new SortingZoneLogger_1.SortingZoneLogger();
var storageZoneLogger = new StorageZoneLogger_1.StorageZoneLogger();
var airStripZoneLogger = new AirStripZoneLogger_1.AirStripZoneLogger();
defaultDoor(employee.zone, employee.card);
defaultDoor(employee2.zone, employee2.card);
defaultDoor(employee3.zone, employee3.card);
defaultDoor(employee4.zone, employee4.card);
doorZero(employee.zone, employee.card, employee.door);
doorZero(employee2.zone, employee2.card, employee2.door);
doorZero(employee3.zone, employee3.card, employee3.door);
doorZero(employee4.zone, employee4.card, employee4.door);
//doorThree(employee.zone, employee.card, employee.door);
//doorThree(employee2.zone, employee2.card, employee2.door);
function defaultDoor(zone, card) {
    var outsideZone = ZoneCreator_1.ZoneCreator.createZone(zone, outsideZoneLogger.outsideEmployeeNumber);
    outsideZone.enterZone();
    outsideZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + outsideZone.zoneName);
    console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
    console.log("");
}
function doorZero(zone, card, door) {
    door.getCurrentState().doorZero();
    zone.zoneName = door.getCurrentState().constructor.name;
    var loadUnloadZone = ZoneCreator_1.ZoneCreator.createZone(zone, loadUnloadZoneLogger.loadUnloadEmployeeNumber);
    loadUnloadZone.enterZone();
    //remove the employee from outside zone logger
    outsideZoneLogger.removeEmployee(card.cardNo);
    loadUnloadZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + loadUnloadZone.zoneName);
    console.log("Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber);
    console.log("");
}
function doorThree(zone, card, door) {
    door.getCurrentState().doorThree();
    zone.zoneName = door.getCurrentState().constructor.name;
    var sortingZone = ZoneCreator_1.ZoneCreator.createZone(zone, sortingZoneLogger.sortingEmployeeNumber);
    sortingZone.enterZone();
    //remove the employee from load/unload zone logger
    loadUnloadZoneLogger.removeEmployee(card.cardNo);
    sortingZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + sortingZone.zoneName);
    console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
    console.log("");
}
function doorSix(zone, card, door) {
    door.getCurrentState().doorSix();
    zone.zoneName = door.getCurrentState().constructor.name;
    var storageZone = ZoneCreator_1.ZoneCreator.createZone(zone, storageZoneLogger.storageEmployeeNumber);
    storageZone.enterZone();
    //remove the employee from sorting zone logger
    sortingZoneLogger.removeEmployee(card.cardNo);
    storageZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + storageZone.zoneName);
    console.log("Employee Numbers: " + storageZoneLogger.storageEmployeeNumber);
    console.log("");
}
function doorSeven(zone, card, door) {
    door.getCurrentState().doorSeven();
    zone.zoneName = door.getCurrentState().constructor.name;
    var sortingZone = ZoneCreator_1.ZoneCreator.createZone(zone, sortingZoneLogger.sortingEmployeeNumber);
    sortingZone.enterZone();
    //remove the employee from storage zone logger
    storageZoneLogger.removeEmployee(card.cardNo);
    sortingZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + sortingZone.zoneName);
    console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
    console.log("");
}
function doorFive(zone, card, door) {
    door.getCurrentState().doorFive();
    zone.zoneName = door.getCurrentState().constructor.name;
    var airStripZone = ZoneCreator_1.ZoneCreator.createZone(zone, airStripZoneLogger.airStripEmployeeNumber);
    airStripZone.enterZone();
    //remove the employee from sorting zone logger
    sortingZoneLogger.removeEmployee(card.cardNo);
    airStripZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + airStripZone.zoneName);
    console.log("Employee Numbers: " + airStripZoneLogger.airStripEmployeeNumber);
    console.log("");
}
function doorFour(zone, card, door) {
    door.getCurrentState().doorFour();
    zone.zoneName = door.getCurrentState().constructor.name;
    var sortingZone = ZoneCreator_1.ZoneCreator.createZone(zone, sortingZoneLogger.sortingEmployeeNumber);
    sortingZone.enterZone();
    //remove the employee from air-strip zone logger
    airStripZoneLogger.removeEmployee(card.cardNo);
    sortingZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + sortingZone.zoneName);
    console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
    console.log("");
}
function doorTwo(zone, card, door) {
    door.getCurrentState().doorTwo();
    zone.zoneName = door.getCurrentState().constructor.name;
    var loadUnloadZone = ZoneCreator_1.ZoneCreator.createZone(zone, loadUnloadZoneLogger.loadUnloadEmployeeNumber);
    loadUnloadZone.enterZone();
    //remove the employee from sorting zone logger
    sortingZoneLogger.removeEmployee(card.cardNo);
    loadUnloadZoneLogger.addEmployee(card);
    console.log("Current Zone Is: " + loadUnloadZone.zoneName);
    console.log("Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber);
    console.log("");
}
function doorOne(zone, card, door) {
    door.getCurrentState().doorOne();
    zone.zoneName = door.getCurrentState().constructor.name;
    var outsideZone = ZoneCreator_1.ZoneCreator.createZone(zone, outsideZoneLogger.outsideEmployeeNumber);
    outsideZoneLogger.addEmployee(card);
    outsideZone.enterZone();
    //remove the employee from load/unload zone logger
    loadUnloadZoneLogger.removeEmployee(card.cardNo);
    console.log("Current Zone Is: " + outsideZone.zoneName);
    console.log("Employee Number: " + outsideZoneLogger.outsideEmployeeNumber);
    console.log("");
}
console.log("Current Employee Number in Outside Zone: " +
    outsideZoneLogger.outsideEmployeeNumber);
console.log(outsideZoneLogger.getEmployee());
////
console.log("Current Employee Number in Unload/Load Zone: " +
    loadUnloadZoneLogger.loadUnloadEmployeeNumber);
console.log(loadUnloadZoneLogger.getEmployee());
////
console.log("Current Employee Number in Sorting Zone: " +
    sortingZoneLogger.sortingEmployeeNumber);
console.log(sortingZoneLogger.getEmployee());
////
console.log("Current Employee Number in Storage Zone: " +
    storageZoneLogger.storageEmployeeNumber);
console.log(storageZoneLogger.getEmployee());
////
console.log("Current Employee Number in AirStrip Zone: " +
    airStripZoneLogger.airStripEmployeeNumber);
console.log(airStripZoneLogger.getEmployee());
