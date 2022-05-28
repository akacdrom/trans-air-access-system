import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class SortingZoneLogger implements EmployeeInteraction {
  sortingZoneEmployeeCardInfo: Card[] = [];
  sortingEmployeeNumber = 0;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    this.sortingEmployeeNumber++;
    this.sortingZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(cardNo: number): void {
    if (this.sortingEmployeeNumber === 0) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.sortingEmployeeNumber--;
      this.sortingZoneEmployeeCardInfo.forEach((value, index) => {
        if (value.cardNo === cardNo) {
          this.sortingZoneEmployeeCardInfo.splice(index, 1);
          console.log(index);
        }
      });
    }
  }
  getEmployee(): Card[] {
    return this.sortingZoneEmployeeCardInfo;
  }
}
