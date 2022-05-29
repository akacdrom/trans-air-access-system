import { AirStripZone } from "./AirStripZone";
import { SortingZone } from "./SortingZone";
import { StorageZone } from "./StorageZone";
import { LoadUnloadZone } from "./LoadUnloadZone";
import { OutsideZone } from "./OutsideZone";

import { Zone } from "./ConcreteZone";

export class ZoneCreator {
  static createZone(
    zone: {
      zoneName: string;
      zoneEmployeeCard: string;
    },
    zoneEmpCount: number
  ): Zone {
    if (
      zone.zoneName === "AirStripZoneState" &&
      (zone.zoneEmployeeCard === "airStrip" ||
        zone.zoneEmployeeCard === "manager")
    ) {
      const airStripZone = new AirStripZone(
        zone.zoneName,
        zone.zoneEmployeeCard,
        zoneEmpCount
      );
      return airStripZone;
    } else if (
      zone.zoneName === "SortingZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "airStrip" ||
        zone.zoneEmployeeCard === "manager" ||
        zone.zoneEmployeeCard === "janitor")
    ) {
      const sortingZone = new SortingZone(
        zone.zoneName,
        zone.zoneEmployeeCard,
        zoneEmpCount
      );
      return sortingZone;
    } else if (
      zone.zoneName === "StorageZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "manager" ||
        zone.zoneEmployeeCard === "janitor")
    ) {
      const storageZone = new StorageZone(
        zone.zoneName,
        zone.zoneEmployeeCard,
        zoneEmpCount
      );
      return storageZone;
    } else if (zone.zoneName === "LoadUnloadZoneState") {
      const loadUnloadZone = new LoadUnloadZone(
        zone.zoneName,
        zone.zoneEmployeeCard,
        zoneEmpCount
      );
      return loadUnloadZone;
    } else if (zone.zoneName === "OutsideZoneState") {
      const outsideZone = new OutsideZone(zone.zoneName);
      return outsideZone;
    } else {
      throw new Error("Access denied!").message.toUpperCase();
    }
  }
}
