import { writable, type Writable } from "svelte/store";

interface Reference {
  initialized: boolean;
  group: string | undefined;
  order: number | undefined;
  index: Writable<number>;
}

let globalReferenceCounter: number = 0;
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
    if (reference.initialized) {
      return reference.index;
    } else {
      reference.index.set(group.count);
      reference.initialized = true;
      reference.order = globalReferenceCounter++
      reference.group = groupName;
      return reference.index;
    }
  }

  const store = writable<number>(group.count);
  references[referenceID] = {
    initialized: true,
    group: groupName,
    order: globalReferenceCounter++,
    index: store,
  };
  return store;
}

export function lookup(referenceID: string): Reference {
  let reference = references[referenceID];
  if (!reference) {
    reference = references[referenceID] = {
      initialized: false,
      group: undefined,
      order: undefined,
      index: writable<number>(),
    };
  }

  return reference;
}

export function remove(referenceID: string): void {
  let reference = references[referenceID]
  if (reference) {
    delete references[referenceID]

    if (reference.order && reference.group) {
      for (const key in references) {
        const other = references[key]
  
        if (other.order && other.group && other.group === reference.group && other.order < reference.order) {
          references[key].index.update((idx) => idx - 1)
        }
      }
    }

    if (reference.group) {
      groups[reference.group].count--
    }
  }

  if (Object.keys(references).length === 0) {
    globalReferenceCounter = 0
  }
}
