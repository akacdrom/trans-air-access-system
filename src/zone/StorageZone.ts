import { ConcreteZone } from "./ConcreteZone";
import { StorageZoneLogger } from "../logger/StorageZoneLogger";

export class StorageZone extends ConcreteZone {
  constructor(
    zoneName: string,
    zoneEmployeeCard: string,
    zoneEmpCount: number
  ) {
    super();
    this.zoneName = zoneName;
    this.zoneEmployeeCard = zoneEmployeeCard;
    this.zoneEmpCount = zoneEmpCount;
  }
  enterZone(): void {
    if (this.zoneEmpCount < 3) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.zoneEmpCount} number of employees.`
      );
    }
  }
}
