import { writable, type Writable } from "svelte/store";

interface Reference {
  declared: boolean;
  group: string | undefined;
  index: Writable<number>;
}

const references: { [reference: string]: Reference } = {};

interface Group {
  count: number;
}

const groups: { [group: string]: Group } = {};

export function store(
  groupName: string,
  referenceID: string
): Writable<number> {
  let group: Group | undefined = groups[groupName];
  if (!group) {
    group = groups[groupName] = {
      count: 1,
    };
  } else {
    group.count += 1;
  }

  const reference = references[referenceID];
  if (reference) {
    if (reference.declared) {
      return reference.index;
    } else {
      reference.index.set(group.count);
      reference.declared = true;
      reference.group = groupName;
      return reference.index;
    }
  }

  const store = writable<number>(group.count);
  references[referenceID] = {
    declared: true,
    group: groupName,
    index: store,
  };
  return store;
}

export function lookup(referenceID: string): Reference {
  let reference = references[referenceID];
  if (!reference) {
    reference = references[referenceID] = {
      declared: false,
      group: undefined,
      index: writable<number>(),
    };
  }

  return reference;
}
