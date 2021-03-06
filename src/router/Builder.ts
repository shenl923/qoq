import { Slot, SlotAllType } from '../slot/Slot';
import { SlotManager } from '../slot/SlotManager';

export abstract class Builder<T extends SlotAllType, Props = any, State = any> {
  protected slots = new SlotManager<T, any, any>([]);

  public/*protected*/ getSlots(): Slot<T, Props, State>[] {
    return this.slots.getBranchSlots();
  }

  public/*protected*/ abstract toJSON(): object;
}
