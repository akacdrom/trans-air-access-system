export interface Zone {
  zoneName: string;
  zoneEmployee: string;
  zoneEmployeeNumber: number;
}

export class ConcreteZone implements Zone {
  zoneName: string;
  zoneEmployee: string;
  zoneEmployeeNumber: number;
}
