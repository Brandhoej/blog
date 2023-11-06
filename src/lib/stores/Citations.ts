import { References, type Reference } from "./References";

export interface Citation {
  source: string;
  note: string | undefined;
}

export class Citations {
  private readonly _referenceGroupName: string = "Citation";
  private readonly _citations: { [citationID: string]: Citation } = {};
  private readonly _references: References = new References();

  public store(citationID: string, citation: Citation): Reference {
    this._citations[citationID] = citation;
    return this._references.store(this._referenceGroupName, citationID);
  }

  public reference(citationID: string): Reference {
    return this._references.lookup(this._referenceGroupName, citationID);
  }

  public citation(citationID: string): Citation {
    this._references.lookup(this._referenceGroupName, citationID);
    return this._citations[citationID];
  }

  public get citationIDs(): string[] {
    return Object.keys(this._citations);
  }
}
