import { Slot } from '../slot/Slot';
import { SlotManager } from '../slot/SlotManager';

export abstract class Builder<T extends Slot.Mix | Slot.Console | Slot.Web, Props = any, State = any> {
  protected slots = new SlotManager<T, any, any>([]);

  protected setSlot<P, S>(slot: Slot<T, P, S>): SlotManager<T, Props & P, State & S> {
    this.slots = this.slots.use(slot);

    return this.slots;
  }

  public/*protected*/ getSlots(): Slot<T, Props, State>[] {
    return this.slots.getSlots();
  }

  public/*protected*/ abstract toJSON(): object;
}
