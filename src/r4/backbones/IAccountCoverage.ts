import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

export interface IAccountCoverage extends IBackboneElement {
  coverage: IReference;
  priority?: number;
  _priority?: IElement;
}
