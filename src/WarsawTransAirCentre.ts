import { ZoneCreator } from "./zone/ZoneCreator";
import { Door } from "./door/Door";
import { OutsideZoneLogger } from "./logger/OutsideZoneLogger";
import { LoadUnloadZoneLogger } from "./logger/LoadUnloadZoneLogger";
import { SortingZoneLogger } from "./logger/SortingZoneLogger";
import { StorageZoneLogger } from "./logger/StorageZoneLogger";
import { AirStripZoneLogger } from "./logger/AirStripZoneLogger";
import { Employees } from "./__Employees";

const employees = new Employees();
const employee = employees.employee();
const employee2 = employees.employee2();

const outsideZoneLogger = new OutsideZoneLogger();
const loadUnloadZoneLogger = new LoadUnloadZoneLogger();
const sortingZoneLogger = new SortingZoneLogger();
const storageZoneLogger = new StorageZoneLogger();
const airStripZoneLogger = new AirStripZoneLogger();

defaultDoor(employee.zone, employee.card);
defaultDoor(employee2.zone, employee2.card);

doorZero(employee.zone, employee.card, employee.door);
doorZero(employee2.zone, employee2.card, employee2.door);

doorThree(employee.zone, employee.card, employee.door);
doorThree(employee2.zone, employee2.card, employee2.door);

function defaultDoor(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string }
) {
  const outsideZone = ZoneCreator.createZone(zone);
  outsideZone.enterZone();
  outsideZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + outsideZone.zoneName);
  console.log("Employee Count: " + outsideZoneLogger.outsideEmployeeNumber);
  console.log("");
}

function doorZero(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorZero();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const loadUnloadZone = ZoneCreator.createZone(zone);
  loadUnloadZone.enterZone();
  //remove the employee from outside zone logger
  outsideZoneLogger.removeEmployee(card.cardNo);
  loadUnloadZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + loadUnloadZone.zoneName);
  console.log(
    "Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
  console.log("");
}

function doorThree(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorThree();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zone);
  sortingZone.enterZone();
  //remove the employee from load/unload zone logger
  loadUnloadZoneLogger.removeEmployee(card.cardNo);
  sortingZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorSix(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorSix();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const storageZone = ZoneCreator.createZone(zone);
  storageZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(card.cardNo);
  storageZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + storageZone.zoneName);
  console.log("Employee Numbers: " + storageZoneLogger.storageEmployeeNumber);
  console.log("");
}

function doorSeven(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorSeven();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zone);
  sortingZone.enterZone();
  //remove the employee from storage zone logger
  storageZoneLogger.removeEmployee(card.cardNo);
  sortingZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorFive(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorFive();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const airStripZone = ZoneCreator.createZone(zone);
  airStripZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(card.cardNo);
  airStripZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + airStripZone.zoneName);
  console.log("Employee Numbers: " + airStripZoneLogger.airStripEmployeeNumber);
  console.log("");
}

function doorFour(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorFour();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const sortingZone = ZoneCreator.createZone(zone);
  sortingZone.enterZone();
  //remove the employee from air-strip zone logger
  airStripZoneLogger.removeEmployee(card.cardNo);
  sortingZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + sortingZone.zoneName);
  console.log("Employee Numbers: " + sortingZoneLogger.sortingEmployeeNumber);
  console.log("");
}

function doorTwo(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorTwo();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const loadUnloadZone = ZoneCreator.createZone(zone);
  loadUnloadZone.enterZone();
  //remove the employee from sorting zone logger
  sortingZoneLogger.removeEmployee(card.cardNo);
  loadUnloadZoneLogger.addEmployee(card);
  console.log("Current Zone Is: " + loadUnloadZone.zoneName);
  console.log(
    "Employee Number: " + loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
  console.log("");
}

function doorOne(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string },
  door: Door
) {
  door.getCurrentState().doorOne();
  zone.zoneName = (<any>door.getCurrentState()).constructor.name;
  const outsideZone = ZoneCreator.createZone(zone);
  outsideZoneLogger.addEmployee(card);
  outsideZone.enterZone();
  //remove the employee from load/unload zone logger
  loadUnloadZoneLogger.removeEmployee(card.cardNo);
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
