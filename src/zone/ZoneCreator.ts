import { AirStripZone } from "./AirStripZone";
import { SortingZone } from "./SortingZone";
import { StorageZone } from "./StorageZone";
import { LoadUnloadZone } from "./LoadUnloadZone";
import { OutsideZone } from "./OutsideZone";

import { CardInTheZone } from "./ConcreteZone";

export class ZoneCreator {
  static createZone(zone: {
    zoneName: string;
    zoneEmployeeCard: string;
  }): CardInTheZone {
    if (
      zone.zoneName === "AirStripZoneState" &&
      zone.zoneEmployeeCard === "airstrip"
    ) {
      console.log("airstrip zone");
      const airStripZone = new AirStripZone(zone.zoneName);
      return airStripZone;
    } else if (
      zone.zoneName === "SortingZoneState" &&
      (zone.zoneEmployeeCard === "sorter" ||
        zone.zoneEmployeeCard === "airstrip")
    ) {
      console.log("sorting zone");
      return new SortingZone();
    } else if (
      zone.zoneName === "StorageZoneState" &&
      zone.zoneEmployeeCard === "sorter"
    ) {
      console.log("storage zone");
      return new StorageZone();
    } else if (zone.zoneName === "LoadUnloadZoneState") {
      console.log("load unload zone");
      return new LoadUnloadZone(zone.zoneName);
    } else if (zone.zoneName === "OutsideZoneState") {
      console.log("outside zone");
      return new OutsideZone(zone.zoneName);
    } else {
      throw new Error("Zone not found!");
    }
  }
}
