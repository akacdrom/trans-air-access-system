import { ConcreteZone } from "./ConcreteZone";

export class OutsideZone extends ConcreteZone {
  zoneEmployeeNumber: number | undefined;
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.zoneEmployeeNumber === undefined) {
      this.zoneEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    console.log(`Access granted, entered the ${this.zoneName} zone`);
    this.zoneEmployeeNumber++;
    return this.zoneEmployeeNumber;
  }
  getZoneEmployeeNumber(): number {
    return this.zoneEmployeeNumber;
  }
}
