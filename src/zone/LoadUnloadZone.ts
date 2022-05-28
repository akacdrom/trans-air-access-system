import { ConcreteZone } from "./ConcreteZone";
import { LoadUnloadZoneLogger } from "../logger/LoadUnloadZoneLogger";

export class LoadUnloadZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
  }
  enterZone(): void {
    const loadUnloadZoneLogger = new LoadUnloadZoneLogger();
    if (loadUnloadZoneLogger.loadUnloadEmployeeNumber < 5) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
    } else {
      throw new Error(
        `Limit is reached. Zone has ${loadUnloadZoneLogger.loadUnloadEmployeeNumber} number of employees.`
      );
    }
  }
}
