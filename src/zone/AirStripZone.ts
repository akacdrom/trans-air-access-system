import { ConcreteZone } from "./ConcreteZone";

export class AirStripZone extends ConcreteZone {
  zoneEmployeeNumber: number | undefined;
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.zoneEmployeeNumber === undefined) {
      this.zoneEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    if (this.zoneEmployeeNumber < 3) {
      console.log(`entered the ${this.zoneName} zone`);
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
