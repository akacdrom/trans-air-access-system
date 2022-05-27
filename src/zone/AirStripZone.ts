import { ConcreteZone } from "./ConcreteZone";

export class AirStripZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.airStripEmployeeNumber === undefined) {
      this.airStripEmployeeNumber = 0;
    }
  }
  enterZone(): void {
    if (this.airStripEmployeeNumber < 3) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
      this.airStripEmployeeNumber++;
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.sortingEmployeeNumber} number of employees.`
      );
    }
  }
  leaveZone(): void {
    this.airStripEmployeeNumber--;
  }
}
