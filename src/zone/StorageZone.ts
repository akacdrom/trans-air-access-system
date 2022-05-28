import { ConcreteZone } from "./ConcreteZone";
import { StorageZoneLogger } from "../logger/StorageZoneLogger";

export class StorageZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
  }
  enterZone(): void {
    const storageZoneLogger = new StorageZoneLogger();
    if (storageZoneLogger.storageEmployeeNumber < 3) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
    } else {
      throw new Error(
        `Limit is reached. Zone has ${storageZoneLogger.storageEmployeeNumber} number of employees.`
      );
    }
  }
}
