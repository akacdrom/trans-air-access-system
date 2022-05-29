export interface Zone {
  zoneName: string;
  zoneEmployeeCard: string;
  zoneEmpCount: number;
  enterZone(): void;
}

export class ConcreteZone implements Zone {
  zoneName: string;
  zoneEmployeeCard: string;
  zoneEmpCount: number;
  enterZone(): void {}
}
