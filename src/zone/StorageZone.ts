import { ConcreteZone } from "./ConcreteZone";

export class StorageZone extends ConcreteZone {
  zoneEmployeeNumber: number | undefined;
  constructor() {
    super();
    if (this.zoneEmployeeNumber === undefined) {
      this.zoneEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    if (this.zoneEmployeeNumber < 3) {
      this.zoneEmployeeNumber++;
      return this.zoneEmployeeNumber;
    } else {
      throw new Error(
        `zone has ${this.zoneEmployeeNumber} number of employees.`
      );
    }
  }
  getZoneEmployeeNumber(): number {
    return this.zoneEmployeeNumber;
  }
}
