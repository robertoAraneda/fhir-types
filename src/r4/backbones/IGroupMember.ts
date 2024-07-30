import { IBackboneElement, IElement } from '../base';
import { IPeriod, IReference } from '../datatypes';

export interface IGroupMember extends IBackboneElement {
  entity: IReference;
  period?: IPeriod;
  inactive?: boolean;
  _inactive?: IElement;
}
