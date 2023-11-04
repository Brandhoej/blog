import { writable, type Writable } from "svelte/store";

export interface Reference {
  groupName: string;
  index: Writable<number | undefined>;
}

export function labelFor(
  groupName: string,
  index: string | number | undefined
): string {
  return `${groupName} ${index ?? "??"}`;
}

export function fragmentFor(
  groupName: string,
  index: string | number | undefined
): string | undefined {
  return labelFor(groupName, index).toLowerCase().replace(" ", "-");
}

interface Group {
  counter: number;
}

export class References {
  private readonly _references: { [referenceID: string]: Reference } = {};
  private readonly _groups: { [groupName: string]: Group } = {};

  private hasReference(referenceID: string): boolean {
    return !!this._references[referenceID];
  }

  private nextGroupIndex(groupName: string): number {
    let group = this._groups[groupName];

    if (group) {
      group.counter += 1;
    } else {
      group = this._groups[groupName] = {
        counter: 1,
      };
    }

    return group.counter;
  }

  public store(groupName: string, referenceID: string): Reference {
    if (this.hasReference(referenceID)) {
      const index = this._references[referenceID].index;
      index.set(this.nextGroupIndex(groupName));
    } else {
      this._references[referenceID] = {
        groupName,
        index: writable(this.nextGroupIndex(groupName)),
      };
    }

    return this._references[referenceID];
  }

  public lookup(groupName: string, referenceID: string): Reference {
    if (!this.hasReference(referenceID)) {
      this._references[referenceID] = {
        groupName: groupName,
        index: writable(undefined),
      };
    }

    return this._references[referenceID];
  }
}
