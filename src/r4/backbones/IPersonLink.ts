import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { IdentityAssuranceLevelEnum } from '../enums';
import { IdentityAssuranceLevelType } from '../types';

type PersonLinkAssuranceType = IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
export interface IPersonLink extends IBackboneElement {
  target: IReference;
  assurance?: PersonLinkAssuranceType;
  _assurance?: IElement;
}
