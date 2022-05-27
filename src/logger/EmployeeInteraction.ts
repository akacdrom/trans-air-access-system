export interface EmployeeInteraction {
  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void;
  removeEmployee(cardNo: number): void;
  getEmployee(): Card[];
}

export interface Card {
  cardNo: number;
  cardName: string;
  cardType: string;
}
