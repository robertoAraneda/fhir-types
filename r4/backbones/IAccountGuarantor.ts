import { IBackboneElement, IElement } from '../base';
import { IPeriod, IReference } from '../datatypes';

export interface IAccountGuarantor extends IBackboneElement {
  party: IReference;
  onHold?: boolean;
  period?: IPeriod;

  _onHold?: IElement;
}
