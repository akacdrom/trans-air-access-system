import { Door, State } from "./Door";

export class SortingZoneState implements State {
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
    console.log("Trying to open the door of the Unload/Load zone");
    this.door.setState(this.door.loadUnloadZoneState);
  }
  doorThree() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorFour() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorFive() {
    console.log("Trying to open the door of the Air-Strip zone");
    this.door.setState(this.door.airStripZoneState);
  }
  doorSix() {
    console.log("Trying to open the door of the Storage zone");
    this.door.setState(this.door.storageZoneState);
  }
  doorSeven() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
}
