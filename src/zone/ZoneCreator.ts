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
      zone.zoneEmployeeCard === "airstrip"
    ) {
      const airStripZone = new AirStripZone(zone.zoneName);
      airStripZone.enterZone();
      return airStripZone;
    } else if (
      zone.zoneName === "SortingZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "airstrip")
    ) {
      const sortingZone = new SortingZone(zone.zoneName);
      sortingZone.enterZone();
      return sortingZone;
    } else if (
      zone.zoneName === "StorageZoneState" &&
      zone.zoneEmployeeCard === "sorter"
    ) {
      const storageZone = new StorageZone(zone.zoneName);
      storageZone.enterZone();
      return storageZone;
    } else if (zone.zoneName === "LoadUnloadZoneState") {
      const loadUnloadZone = new LoadUnloadZone(zone.zoneName);
      loadUnloadZone.enterZone();
      return loadUnloadZone;
    } else if (zone.zoneName === "OutsideZoneState") {
      const outsideZone = new OutsideZone(zone.zoneName);
      outsideZone.enterZone();
      return outsideZone;
    } else {
      throw new Error("Access denied!");
    }
  }
}
