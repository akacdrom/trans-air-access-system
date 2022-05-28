import { ConcreteZone } from "./ConcreteZone";
import { AirStripZoneLogger } from "../logger/AirStripZoneLogger";

export class AirStripZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
  }
  enterZone(): void {
    const airStripZoneLogger = new AirStripZoneLogger();
    if (airStripZoneLogger.airStripEmployeeNumber < 3) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
    } else {
      throw new Error(
        `Limit is reached. Zone has ${airStripZoneLogger.airStripEmployeeNumber} number of employees.`
      );
    }
  }
}
