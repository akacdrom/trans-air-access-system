import { ConcreteZone } from "./ConcreteZone";
import { LoadUnloadZoneLogger } from "../logger/LoadUnloadZoneLogger";

export class LoadUnloadZone extends ConcreteZone {
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
    if (this.zoneEmpCount < 5) {
      if (
        (this.zoneEmployeeCard === "janitor" &&
          LoadUnloadZoneLogger.getNonJanitorPresent()) ||
        this.zoneEmployeeCard !== "janitor"
      ) {
        console.log(`Access granted, entered the ${this.zoneName} zone`);
      } else {
        throw new Error(
          "Janitor access denied!\nJanitor cannot be alone, or only with janitor in the same zone"
        ).message.toUpperCase();
      }
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.zoneEmpCount} number of employees.`.toUpperCase()
      );
    }
  }
}
