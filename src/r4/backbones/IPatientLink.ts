import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { LinkTypeType } from '../types';

export interface IPatientLink extends IBackboneElement {
  other: IReference;
  type?: LinkTypeType;
  _type?: IElement;
}
