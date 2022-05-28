import { CardCreator } from "./card/CardCreator";
import { ZoneCreator } from "./zone/ZoneCreator";
import { Door } from "./door/Door";
import { OutsideZoneLogger } from "./logger/OutsideZoneLogger";
import { LoadUnloadZoneLogger } from "./logger/LoadUnloadZoneLogger";
import { SortingZoneLogger } from "./logger/SortingZoneLogger";
import { StorageZoneLogger } from "./logger/StorageZoneLogger";
import { AirStripZoneLogger } from "./logger/AirStripZoneLogger";

// Client
const cardObject = { cardNo: 10, cardName: "Joe", cardType: "manager" };
const card = CardCreator.createCard(cardObject);

// Client2
const cardObject2 = { cardNo: 20, cardName: "James", cardType: "manager" };
const card2 = CardCreator.createCard(cardObject2);

// Client3
const cardObject3 = { cardNo: 50, cardName: "Johnny", cardType: "manager" };
const card3 = CardCreator.createCard(cardObject3);

// Client4
const cardObject4 = { cardNo: 630, cardName: "Jack", cardType: "transport" };
const card4 = CardCreator.createCard(cardObject4);

//Outside zone as default
const door = new Door();
const door2 = new Door();
const door3 = new Door();

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

const outsideZoneLogger = new OutsideZoneLogger();
const loadUnloadZoneLogger = new LoadUnloadZoneLogger();
const sortingZoneLogger = new SortingZoneLogger();
const storageZoneLogger = new StorageZoneLogger();
const airStripZoneLogger = new AirStripZoneLogger();

defaultDoor(zoneObject, cardObject);
defaultDoor(zoneObject2, cardObject2);
doorZero(zoneObject, cardObject, door);
doorZero(zoneObject2, cardObject2, door2);
doorThree(zoneObject, cardObject, door);
doorThree(zoneObject2, cardObject2, door2);

// doorSix(zoneObject3, cardObject3, door3);
// doorSeven(zoneObject3, cardObject3, door3);
// doorFive(zoneObject3, cardObject3, door3);
// doorFour(zoneObject3, cardObject3, door3);
// doorTwo(zoneObject3, cardObject3, door3);
// doorOne(zoneObject3, cardObject3, door3);

function defaultDoor(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string }
) {
  const outsideZone = ZoneCreator.createZone(zoneObject);
  outsideZone.enterZone();
  outsideZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + outsideZone.zoneName);
  console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
  console.log("");
}

function doorZero(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorZero();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const loadUnloadZone = ZoneCreator.createZone(zoneObject);
  loadUnloadZone.enterZone();
  //remove the employee from outside zone logger
  outsideZoneLogger.removeEmployee(cardObject.cardNo);
  loadUnloadZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + loadUnloadZone.zoneName);
  console.log(
    "Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
  console.log("");
}

function doorThree(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorThree();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zoneObject);
  sortingZone.enterZone();
  //remove the employee from load/unload zone logger
  loadUnloadZoneLogger.removeEmployee(cardObject.cardNo);
  sortingZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorSix(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorSix();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const storageZone = ZoneCreator.createZone(zoneObject);
  storageZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(cardObject.cardNo);
  storageZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + storageZone.zoneName);
  console.log("Employee Numbers: " + storageZoneLogger.storageEmployeeNumber);
  console.log("");
}

function doorSeven(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorSeven();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zoneObject);
  sortingZone.enterZone();
  //remove the employee from storage zone logger
  storageZoneLogger.removeEmployee(cardObject.cardNo);
  sortingZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorFive(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorFive();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const airStripZone = ZoneCreator.createZone(zoneObject);
  airStripZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(cardObject.cardNo);
  airStripZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + airStripZone.zoneName);
  console.log("Employee Numbers: " + airStripZoneLogger.airStripEmployeeNumber);
  console.log("");
}

function doorFour(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorFour();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zoneObject);
  sortingZone.enterZone();
  //remove the employee from air-strip zone logger
  airStripZoneLogger.removeEmployee(cardObject.cardNo);
  sortingZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorTwo(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorTwo();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const loadUnloadZone = ZoneCreator.createZone(zoneObject);
  loadUnloadZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(cardObject.cardNo);
  loadUnloadZoneLogger.addEmployee(cardObject);
  console.log("Current Zone Is: " + loadUnloadZone.zoneName);
  console.log(
    "Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
  console.log("");
}

function doorOne(
  zoneObject: { zoneName: any; zoneEmployeeCard: string },
  cardObject: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorOne();
  zoneObject.zoneName = (<any>door.getCurrentState()).constructor.name;
  const outsideZone = ZoneCreator.createZone(zoneObject);
  outsideZoneLogger.addEmployee(cardObject);
  outsideZone.enterZone();
  //remove the employee from load/unload zone logger
  loadUnloadZoneLogger.removeEmployee(cardObject.cardNo);
  console.log("Current Zone Is: " + outsideZone.zoneName);
  console.log("Employee Number: " + outsideZoneLogger.outsideEmployeeNumber);
  console.log("");
}

console.log(
  "Current Employee Number in Outside Zone: " +
    outsideZoneLogger.outsideEmployeeNumber
);
console.log(outsideZoneLogger.getEmployee());

////

console.log(
  "Current Employee Number in Unload/Load Zone: " +
    loadUnloadZoneLogger.loadUnloadEmployeeNumber
);
console.log(loadUnloadZoneLogger.getEmployee());

////

console.log(
  "Current Employee Number in Sorting Zone: " +
    sortingZoneLogger.sortingEmployeeNumber
);
console.log(sortingZoneLogger.getEmployee());

////

console.log(
  "Current Employee Number in Storage Zone: " +
    storageZoneLogger.storageEmployeeNumber
);
console.log(storageZoneLogger.getEmployee());

////

console.log(
  "Current Employee Number in AirStrip Zone: " +
    airStripZoneLogger.airStripEmployeeNumber
);
console.log(airStripZoneLogger.getEmployee());
