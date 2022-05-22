import { CardCreator } from "./card/CardCreator";
import { ZoneCreator } from "./zone/ZoneCreator";
import { Door } from "./door/Door";

// The Client
const cardObject = { cardNo: 50, cardName: "Joe", cardType: "manager" };
const card = CardCreator.createCard(cardObject);

//Outside zone as default
const door = new Door();

let zoneObject = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card.cardType,
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

// function defaultDoor() {
let outsideZone = ZoneCreator.createZone(zoneObject);
outsideZone.enterZone();
console.log("Current Zone Is: " + outsideZone.zoneName);
console.log("Employee Number: " + outsideZone.outsideEmployeeNumber);
outsideZone.leaveZone();
console.log("");
// }

// function doorZero() {
door.getCurrentState().doorZero();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
let loadUnloadZone = ZoneCreator.createZone(zoneObject);
loadUnloadZone.enterZone();
console.log("Current Zone Is: " + loadUnloadZone.zoneName);
console.log("Employee Number: " + loadUnloadZone.loadUnloadEmployeeNumber);
loadUnloadZone.leaveZone();
console.log("");
// }
// function doorThree() {
door.getCurrentState().doorThree();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
let sortingZone = ZoneCreator.createZone(zoneObject);
sortingZone.enterZone();
console.log("Current Zone Is: " + sortingZone.zoneName);
console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
sortingZone.leaveZone();
console.log("");
// }

// function doorSix() {
door.getCurrentState().doorSix();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
const storageZone = ZoneCreator.createZone(zoneObject);
storageZone.enterZone();
console.log("Current Zone Is: " + storageZone.zoneName);
console.log("Employee Numbers: " + storageZone.storageEmployeeNumber);
storageZone.leaveZone();
console.log("");
// }

// function doorSeven() {
door.getCurrentState().doorSeven();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
sortingZone = ZoneCreator.createZone(zoneObject);
sortingZone.enterZone();
console.log("Current Zone Is: " + sortingZone.zoneName);
console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
sortingZone.leaveZone();
console.log("");
// }

// function doorFive() {
door.getCurrentState().doorFive();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
const airStripZone = ZoneCreator.createZone(zoneObject);
airStripZone.enterZone();
console.log("Current Zone Is: " + airStripZone.zoneName);
console.log("Employee Numbers: " + airStripZone.airStripEmployeeNumber);
airStripZone.leaveZone();
console.log("");
// }

// function doorFour() {
door.getCurrentState().doorFour();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
sortingZone = ZoneCreator.createZone(zoneObject);
sortingZone.enterZone();
console.log("Current Zone Is: " + sortingZone.zoneName);
console.log("Employee Numbers: " + sortingZone.sortingEmployeeNumber);
sortingZone.leaveZone();
console.log();
// }

// function doorTwo() {
door.getCurrentState().doorTwo();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
loadUnloadZone = ZoneCreator.createZone(zoneObject);
loadUnloadZone.enterZone();
console.log("Current Zone Is: " + loadUnloadZone.zoneName);
console.log("Employee Number: " + loadUnloadZone.loadUnloadEmployeeNumber);
loadUnloadZone.leaveZone();
console.log("");
// }

// function doorOne() {
door.getCurrentState().doorOne();
zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
outsideZone = ZoneCreator.createZone(zoneObject);
outsideZone.enterZone();
console.log("Current Zone Is: " + outsideZone.zoneName);
console.log("Employee Number: " + outsideZone.outsideEmployeeNumber);
outsideZone.leaveZone();
console.log("");
// }

console.log(
  "Current Employee Number in Outside Zone: " +
    outsideZone.outsideEmployeeNumber
);
console.log(
  "Current Employee Number in Unload/Load Zone: " +
    loadUnloadZone.loadUnloadEmployeeNumber
);
console.log(
  "Current Employee Number in Sorting Zone: " +
    sortingZone.sortingEmployeeNumber
);
console.log(
  "Current Employee Number in Storage Zone: " +
    storageZone.storageEmployeeNumber
);
console.log(
  "Current Employee Number in AirStrip Zone: " +
    airStripZone.airStripEmployeeNumber
);
