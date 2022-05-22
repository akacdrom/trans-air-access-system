import { Door, State } from "./Door";

export class AirStripZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorOne() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorTwo() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorThree() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorFour() {
    console.log("Trying to open the door of the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFive() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorSix() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorSeven() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
}
