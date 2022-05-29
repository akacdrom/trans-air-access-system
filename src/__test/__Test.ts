import { ZoneCreator } from "../zone/ZoneCreator";
import { Door } from "../door/Door";
import { OutsideZoneLogger } from "../logger/OutsideZoneLogger";
import { LoadUnloadZoneLogger } from "../logger/LoadUnloadZoneLogger";
import { SortingZoneLogger } from "../logger/SortingZoneLogger";
import { StorageZoneLogger } from "../logger/StorageZoneLogger";
import { AirStripZoneLogger } from "../logger/AirStripZoneLogger";
import { Employee } from "./__Employee";

const outsideZoneLogger = new OutsideZoneLogger();
const loadUnloadZoneLogger = new LoadUnloadZoneLogger();
const sortingZoneLogger = new SortingZoneLogger();
const storageZoneLogger = new StorageZoneLogger();
const airStripZoneLogger = new AirStripZoneLogger();

class __Test {
  //Move an employee card from the Outside zone to the Unloading/loading zone.
  test() {
    const employees = new Employee();
    const employee = employees.employee();
    defaultDoor(employee.zone, employee.card);
    doorZero(employee.zone, employee.card, employee.door);
  }
  //Move a card from the Sorting zone to the Storage Zone.(It should start from outside zone,
  //since there is no way to go to storage zone directly)
  test2() {
    const employees = new Employee();
    const employee = employees.employee();
    defaultDoor(employee.zone, employee.card);
    doorZero(employee.zone, employee.card, employee.door);
    doorThree(employee.zone, employee.card, employee.door);
    doorSix(employee.zone, employee.card, employee.door);
  }
  //No more than 3 employees are in the Airstrip Zone
  test3() {
    const employees = new Employee();
    const employee8 = employees.employee8();
    const employee9 = employees.employee9();
    const employee10 = employees.employee10();

    //It should work without problem.
    defaultDoor(employee8.zone, employee8.card);
    defaultDoor(employee9.zone, employee9.card);
    defaultDoor(employee10.zone, employee10.card);

    doorZero(employee8.zone, employee8.card, employee8.door);
    doorZero(employee9.zone, employee9.card, employee9.door);
    doorZero(employee10.zone, employee10.card, employee10.door);

    doorThree(employee8.zone, employee8.card, employee8.door);
    doorThree(employee9.zone, employee9.card, employee9.door);
    doorThree(employee10.zone, employee10.card, employee10.door);

    doorFive(employee8.zone, employee8.card, employee8.door);
    doorFive(employee9.zone, employee9.card, employee9.door);
    doorFive(employee10.zone, employee10.card, employee10.door);

    //It should give error.
    const employee13 = employees.employee13();
    defaultDoor(employee13.zone, employee13.card);
    doorZero(employee13.zone, employee13.card, employee13.door);
    doorThree(employee13.zone, employee13.card, employee13.door);
    doorFive(employee13.zone, employee13.card, employee13.door);
  }
  test4() {
    //Door will not allow entrance to a Janitor if there is no other employee in the Zone
    //It should give error.
    const employees = new Employee();
    const employee2 = employees.employee2();
    defaultDoor(employee2.zone, employee2.card);
    doorZero(employee2.zone, employee2.card, employee2.door);
  }
  test5() {
    //No Transport employee is allowed in the Sorter Zone
    //It should give error
    const employees = new Employee();
    const employee11 = employees.employee11();
    defaultDoor(employee11.zone, employee11.card);
    doorZero(employee11.zone, employee11.card, employee11.door);
    doorThree(employee11.zone, employee11.card, employee11.door);
  }
}
const test = new __Test();
test.test();
test.test2();
//test3 going to give error
test.test3();
//test4 going to give error
test.test4();
//test5 going to give error
test.test5();

function defaultDoor(
  zone: { zoneName: any; zoneEmployeeCard: string },
  card: { cardNo: number; cardName: string; cardType: string }
) {
  const outsideZone = ZoneCreator.createZone(
    zone,
    outsideZoneLogger.outsideEmployeeNumber
  );
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
  const loadUnloadZone = ZoneCreator.createZone(
    zone,
    loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
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
  const sortingZone = ZoneCreator.createZone(
    zone,
    sortingZoneLogger.sortingEmployeeNumber
  );
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
  const storageZone = ZoneCreator.createZone(
    zone,
    storageZoneLogger.storageEmployeeNumber
  );
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
  const sortingZone = ZoneCreator.createZone(
    zone,
    sortingZoneLogger.sortingEmployeeNumber
  );
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
  const airStripZone = ZoneCreator.createZone(
    zone,
    airStripZoneLogger.airStripEmployeeNumber
  );
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
  const sortingZone = ZoneCreator.createZone(
    zone,
    sortingZoneLogger.sortingEmployeeNumber
  );
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
  const loadUnloadZone = ZoneCreator.createZone(
    zone,
    loadUnloadZoneLogger.loadUnloadEmployeeNumber
  );
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
  const outsideZone = ZoneCreator.createZone(
    zone,
    outsideZoneLogger.outsideEmployeeNumber
  );
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
