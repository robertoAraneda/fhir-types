import { IBackboneElement, IElement } from '../base';
import { ICoding, IReference } from '../datatypes';

export interface IAuditEventSource extends IBackboneElement {
  site?: string;
  observer?: IReference;
  type?: ICoding[];

  _site?: IElement;
}
