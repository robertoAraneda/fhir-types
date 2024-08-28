import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { LinkTypeType } from '../types';

export interface IPatientLink extends IBackboneElement {
  /**
   * @description The other patient resource that the link refers to.
   */
  other: IReference;

  /**
   * @description The type of link between this patient resource and another patient resource.
   */
  type: LinkTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;
}
