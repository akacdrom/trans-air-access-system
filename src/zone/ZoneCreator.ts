import { AirStripZone } from "./AirStripZone";
import { SortingZone } from "./SortingZone";
import { StorageZone } from "./StorageZone";
import { LoadUnloadZone } from "./LoadUnloadZone";
import { OutsideZone } from "./OutsideZone";

import { Zone } from "./ConcreteZone";

export class ZoneCreator {
  static createZone(zone: {
    zoneName: string;
    zoneEmployeeCard: string;
  }): Zone {
    if (
      zone.zoneName === "AirStripZoneState" &&
      (zone.zoneEmployeeCard === "airstrip" ||
        zone.zoneEmployeeCard === "manager")
    ) {
      const airStripZone = new AirStripZone(zone.zoneName);
      return airStripZone;
    } else if (
      zone.zoneName === "SortingZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "airstrip" ||
        zone.zoneEmployeeCard === "manager")
    ) {
      const sortingZone = new SortingZone(zone.zoneName);
      return sortingZone;
    } else if (
      zone.zoneName === "StorageZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "manager")
    ) {
      const storageZone = new StorageZone(zone.zoneName);
      return storageZone;
    } else if (zone.zoneName === "LoadUnloadZoneState") {
      const loadUnloadZone = new LoadUnloadZone(zone.zoneName);
      return loadUnloadZone;
    } else if (zone.zoneName === "OutsideZoneState") {
      const outsideZone = new OutsideZone(zone.zoneName);
      return outsideZone;
    } else {
      throw new Error("Access denied!").message.toUpperCase();
    }
  }
}
