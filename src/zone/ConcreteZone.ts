export interface Zone {
  zoneName: string;
  zoneEmployee: string;

  outsideEmployeeNumber: number | undefined;
  loadUnloadEmployeeNumber: number;
  sortingEmployeeNumber: number;
  storageEmployeeNumber: number;
  airStripEmployeeNumber: number;

  leaveZone(): void;
  enterZone(): void;
}

export class ConcreteZone implements Zone {
  zoneName: string;
  zoneEmployee: string;

  outsideEmployeeNumber: number;
  loadUnloadEmployeeNumber: number;
  sortingEmployeeNumber: number;
  storageEmployeeNumber: number;
  airStripEmployeeNumber: number;

  leaveZone(): void {}
  enterZone(): void {}
}
