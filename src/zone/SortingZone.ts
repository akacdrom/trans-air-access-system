import { ConcreteZone } from "./ConcreteZone";

export class SortingZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.sortingEmployeeNumber === undefined) {
      this.sortingEmployeeNumber = 0;
    }
  }
  enterZone(): void {
    if (this.sortingEmployeeNumber < 7) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
      this.sortingEmployeeNumber++;
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.sortingEmployeeNumber} number of employees.`
      );
    }
  }
  leaveZone(): void {
    this.sortingEmployeeNumber--;
  }
}
