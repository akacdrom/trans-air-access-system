"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var CardCreator_1 = require("../card/CardCreator");
var Door_1 = require("../door/Door");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // employee function to create objects of card, zone and zone
    Employee.prototype.employee = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 22,
            cardName: "Joe",
            cardType: "manager"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee2 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 1128,
            cardName: "Kit",
            cardType: "janitor"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee3 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 1032,
            cardName: "Bob",
            cardType: "janitor"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee4 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 230,
            cardName: "Pete",
            cardType: "sorter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee5 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 412,
            cardName: "Dan",
            cardType: "sorter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee6 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 351,
            cardName: "Matt",
            cardType: "sorter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee7 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 254,
            cardName: "Steve",
            cardType: "sorter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee8 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 123,
            cardName: "Bim",
            cardType: "airStrip"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee9 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 107,
            cardName: "Tim",
            cardType: "airStrip"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee10 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 186,
            cardName: "Amy",
            cardType: "airStrip"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee11 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 665,
            cardName: "Mario",
            cardType: "transporter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee12 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 725,
            cardName: "Polly",
            cardType: "transporter"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    Employee.prototype.employee13 = function () {
        var card = CardCreator_1.CardCreator.createCard({
            cardNo: 190,
            cardName: "Mike",
            cardType: "airStrip"
        });
        var door = new Door_1.Door();
        var zone = {
            zoneName: door.getCurrentState().constructor.name,
            zoneEmployeeCard: card.cardType
        };
        return { card: card, door: door, zone: zone };
    };
    return Employee;
}());
exports.Employee = Employee;
