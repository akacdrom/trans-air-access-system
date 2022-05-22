import { OutsideZoneState } from "./OutsideZoneState";
import { LoadUnloadZoneState } from "./LoadUnloadZoneState";
import { SortingZoneState } from "./SortingZoneState";
import { AirStripZoneState } from "./AirStripZoneState";
import { StorageZoneState } from "./StorageZoneState";

export interface State {
  door: Door;

  doorZero(): void;
  doorOne(): void;
  doorTwo(): void;
  doorThree(): void;
  doorFour(): void;
  doorFive(): void;
  doorSix(): void;
  doorSeven(): void;
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
