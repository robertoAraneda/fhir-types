import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { LinkTypeEnum } from '../enums';
import { LinkTypeType } from '../types';

type PatientLinkType = LinkTypeEnum | LinkTypeType

export interface IPatientLink extends IBackboneElement {
  other: IReference;
  type?: PatientLinkType;
  _type?: IElement;
}
