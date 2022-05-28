import { ConcreteZone } from "./ConcreteZone";
import { SortingZoneLogger } from "../logger/SortingZoneLogger";

export class SortingZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
  }
  enterZone(): void {
    const sortingZoneLogger = new SortingZoneLogger();
    if (sortingZoneLogger.sortingEmployeeNumber < 7) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
    } else {
      throw new Error(
        `Limit is reached. Zone has ${sortingZoneLogger.sortingEmployeeNumber} number of employees.`
      );
    }
  }
}
