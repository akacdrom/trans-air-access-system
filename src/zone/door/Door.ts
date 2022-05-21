import { AirStripZone } from "../AirStripZone";
import { SortingZone } from "../SortingZone";
import { StorageZone } from "../StorageZone";
import { LoadUnloadZone } from "../LoadUnloadZone";
import { OutsideZone } from "../OutsideZone";

import { CardInTheZone } from "../ConcreteZone";

interface State {
  door: Door;

  doorZero();
  doorOne();
  doorTwo();
  doorThree();
  doorFour();
  doorFive();
  doorSix();
  doorSeven();
}
export class Door {
  public outsideZoneState: State;
  public loadUnloadZoneState: State;
  public sortingZoneState: State;
  public airStripZoneState: State;
  public storageZoneState: State;

  public currentState: State;

  constructor() {
    this.outsideZoneState = new OutsideZoneState(this);
    this.loadUnloadZoneState = new LoadUnloadZoneState(this);
    this.sortingZoneState = new SortingZoneState(this);
    this.airStripZoneState = new AirStripZoneState(this);
    this.storageZoneState = new StorageZoneState(this);

    this.setState(this.outsideZoneState);
  }

  setState(state: State) {
    this.currentState = state;
  }
  getCurrentState(): State {
    return this.currentState;
  }
}

export class OutsideZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    console.log("Trying to open the door of the Unload/Load zone");
    this.door.setState(this.door.loadUnloadZoneState);
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}
export class LoadUnloadZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    console.log("Entering into the Outside zone");
    this.door.setState(this.door.outsideZoneState);
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    console.log("Entering into the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class SortingZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    console.log("Entering into the Unload/Load zone");
    this.door.setState(this.door.loadUnloadZoneState);
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    console.log("Entering into the AirStrip zone");
    this.door.setState(this.door.airStripZoneState);
  }
  doorSix() {
    console.log("Entering into the Storage zone");
    this.door.setState(this.door.storageZoneState);
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class AirStripZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    console.log("Entering into the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class StorageZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    console.log("Entering into the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
}
