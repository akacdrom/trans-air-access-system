export interface Zone {
  zoneName: string;

  enterZone(): void;
}

export class ConcreteZone implements Zone {
  zoneName: string;

  enterZone(): void {}
}
