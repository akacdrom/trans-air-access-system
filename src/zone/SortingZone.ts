import { ConcreteZone } from "./ConcreteZone";
import { SortingZoneLogger } from "../logger/SortingZoneLogger";

export class SortingZone extends ConcreteZone {
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
    if (this.zoneEmpCount < 7) {
      if (
        (this.zoneEmployeeCard === "janitor" &&
          SortingZoneLogger.getNonJanitorPresent()) ||
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
        `Limit is reached. Zone has ${this.zoneEmpCount} number of employees.`
      );
    }
  }
}
