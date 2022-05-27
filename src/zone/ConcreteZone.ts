export interface Zone {
  zoneName: string;
  zoneEmployee: string;

  outsideEmployeeNumber: number | undefined;
  loadUnloadEmployeeNumber: number | undefined;
  sortingEmployeeNumber: number | undefined;
  storageEmployeeNumber: number | undefined;
  airStripEmployeeNumber: number | undefined;

  leaveZone(): void;
  enterZone(): void;
}

export class ConcreteZone implements Zone {
  zoneName: string;
  zoneEmployee: string;

  outsideEmployeeNumber: number | undefined;
  loadUnloadEmployeeNumber: number | undefined;
  sortingEmployeeNumber: number | undefined;
  storageEmployeeNumber: number | undefined;
  airStripEmployeeNumber: number | undefined;

  leaveZone(): void {}
  enterZone(): void {}
}
