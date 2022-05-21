export interface CardInTheZone {
  zoneName: string;
  zoneEmployee: string;
  zoneEmployeeNumber: number;
}

export class ConcreteZone implements CardInTheZone {
  zoneName: string;
  zoneEmployee: string;
  zoneEmployeeNumber: number;
}
