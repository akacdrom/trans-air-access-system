import { CardCreator } from "./card/CardCreator";
import { ZoneCreator } from "./zone/ZoneCreator";
import { Door } from "./door/Door";
import { OutsideZoneLogger } from "./logger/OutsideZoneLogger";
import { LoadUnloadZoneLogger } from "./logger/LoadUnloadZoneLogger";

// Client
const cardObject = { cardNo: 600, cardName: "Joe", cardType: "transport" };
const card = CardCreator.createCard(cardObject);

// Client2
const cardObject2 = { cardNo: 610, cardName: "James", cardType: "transport" };
const card2 = CardCreator.createCard(cardObject);

// Client3
const cardObject3 = { cardNo: 620, cardName: "Johnny", cardType: "transport" };
const card3 = CardCreator.createCard(cardObject);

// Client4
const cardObject4 = { cardNo: 630, cardName: "Jack", cardType: "transport" };
const card4 = CardCreator.createCard(cardObject);

//Outside zone as default
const door = new Door();

let zoneObject = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card.cardType,
};

let zoneObject2 = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card2.cardType,
};
let zoneObject3 = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card3.cardType,
};

let zoneObject4 = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card4.cardType,
};

// defaultDoor();
// doorZero();
// doorThree();
// doorSix();
// doorSeven();
// doorFive();
// doorFour();
// doorTwo();
// doorOne();

const outsideZoneLogger = new OutsideZoneLogger();
const loadUnloadZoneLogger = new LoadUnloadZoneLogger();

// function defaultDoor() {
let outsideZone = ZoneCreator.createZone(zoneObject);
outsideZone.enterZone();
outsideZoneLogger.addEmployee(cardObject);
console.log("Current Zone Is: " + outsideZone.zoneName);
console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
//outsideZone.leaveZone();
console.log("");
// }

// function defaultDoor() {
const outsideZone2 = ZoneCreator.createZone(zoneObject2);
outsideZone2.enterZone();
outsideZoneLogger.addEmployee(cardObject2);
console.log("Current Zone Is: " + outsideZone2.zoneName);
console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
//outsideZone.leaveZone();
console.log("");
// }

// function defaultDoor() {
const outsideZone3 = ZoneCreator.createZone(zoneObject3);
outsideZone3.enterZone();
outsideZoneLogger.addEmployee(cardObject3);
console.log("Current Zone Is: " + outsideZone3.zoneName);
console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
outsideZoneLogger.removeEmployee(cardObject3.cardNo);
console.log("");
// }

// function defaultDoor() {
const outsideZone4 = ZoneCreator.createZone(zoneObject4);
outsideZone4.enterZone();
outsideZoneLogger.addEmployee(cardObject4);
console.log("Current Zone Is: " + outsideZone4.zoneName);
console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
//outsideZone.leaveZone();
console.log("");
// }

// function doorZero() {
door.getCurrentState().doorZero();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
let loadUnloadZone = ZoneCreator.createZone(zoneObject);
loadUnloadZone.enterZone();
loadUnloadZoneLogger.addEmployee(cardObject4);
console.log("Current Zone Is: " + loadUnloadZone.zoneName);
console.log(
  "Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber
);
loadUnloadZone.leaveZone();
console.log("");
// }

// // function doorThree() {
// door.getCurrentState().doorThree();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// let sortingZone = ZoneCreator.createZone(zoneObject);
// sortingZone.enterZone();
// console.log("Current Zone Is: " + sortingZone.zoneName);
// console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
// sortingZone.leaveZone();
// console.log("");
// // }

// // function doorSix() {
// door.getCurrentState().doorSix();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// const storageZone = ZoneCreator.createZone(zoneObject);
// storageZone.enterZone();
// console.log("Current Zone Is: " + storageZone.zoneName);
// console.log("Employee Numbers: " + storageZone.storageEmployeeNumber);
// storageZone.leaveZone();
// console.log("");
// // }

// // function doorSeven() {
// door.getCurrentState().doorSeven();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// sortingZone = ZoneCreator.createZone(zoneObject);
// sortingZone.enterZone();
// console.log("Current Zone Is: " + sortingZone.zoneName);
// console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
// sortingZone.leaveZone();
// console.log("");
// // }

// // function doorFive() {
// door.getCurrentState().doorFive();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// const airStripZone = ZoneCreator.createZone(zoneObject);
// airStripZone.enterZone();
// console.log("Current Zone Is: " + airStripZone.zoneName);
// console.log("Employee Numbers: " + airStripZone.airStripEmployeeNumber);
// airStripZone.leaveZone();
// console.log("");
// // }

// // function doorFour() {
// door.getCurrentState().doorFour();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// sortingZone = ZoneCreator.createZone(zoneObject);
// sortingZone.enterZone();
// console.log("Current Zone Is: " + sortingZone.zoneName);
// console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
// sortingZone.leaveZone();
// console.log();
// // }

// // function doorTwo() {
// door.getCurrentState().doorTwo();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// loadUnloadZone = ZoneCreator.createZone(zoneObject);
// loadUnloadZone.enterZone();
// console.log("Current Zone Is: " + loadUnloadZone.zoneName);
// console.log("Employee Number: " + loadUnloadZone.loadUnloadEmployeeNumber);
// loadUnloadZone.leaveZone();
// console.log("");
// // }

// // function doorOne() {
// door.getCurrentState().doorOne();
// zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
// outsideZone = ZoneCreator.createZone(zoneObject);
// outsideZone.enterZone();
// console.log("Current Zone Is: " + outsideZone.zoneName);
// console.log("Employee Number: " + outsideZone.outsideEmployeeNumber);
// outsideZone.leaveZone();
// console.log("");
// // }

console.log(
  "Current Employee Number in Outside Zone: " +
    outsideZoneLogger.outsideEmployeeNumber
);
console.log(outsideZoneLogger.getEmployee());

console.log(
  "Current Employee Number in Unload/Load Zone: " +
    loadUnloadZoneLogger.loadUnloadEmployeeNumber
);
// console.log(
//   "Current Employee Number in Sorting Zone: " +
//     sortingZone.sortingEmployeeNumber
// );
// console.log(
//   "Current Employee Number in Storage Zone: " +
//     storageZone.storageEmployeeNumber
// );
// console.log(
//   "Current Employee Number in AirStrip Zone: " +
//     airStripZone.airStripEmployeeNumber
// );
