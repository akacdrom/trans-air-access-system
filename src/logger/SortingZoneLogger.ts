import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class SortingZoneLogger implements EmployeeInteraction {
  sortingZoneEmployeeCardInfo: Card[] = [];
  sortingEmployeeNumber: number | undefined;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    if (this.sortingEmployeeNumber === undefined) {
      this.sortingEmployeeNumber = 1;
    } else {
      this.sortingEmployeeNumber++;
    }
    this.sortingZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(): void {
    if (
      this.sortingEmployeeNumber === undefined ||
      this.sortingEmployeeNumber === 0
    ) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.sortingEmployeeNumber--;
    }
  }
  getEmployee(): Card[] {
    return this.sortingZoneEmployeeCardInfo;
  }
}
