import { ConcreteZone } from "./ConcreteZone";
export class LoadUnloadZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.loadUnloadEmployeeNumber === undefined) {
      this.loadUnloadEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    if (this.loadUnloadEmployeeNumber < 5) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
      this.loadUnloadEmployeeNumber++;
      return this.loadUnloadEmployeeNumber;
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.sortingEmployeeNumber} number of employees.`
      );
    }
  }
  leaveZone(): void {
    this.loadUnloadEmployeeNumber--;
  }
}
