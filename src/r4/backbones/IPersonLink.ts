import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { IdentityAssuranceLevelType } from '../types';
export interface IPersonLink extends IBackboneElement {
  target: IReference;
  assurance?: IdentityAssuranceLevelType;
  _assurance?: IElement;
}
