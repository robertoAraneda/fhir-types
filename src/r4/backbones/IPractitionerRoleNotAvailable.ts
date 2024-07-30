import { IBackboneElement, IElement } from '../base';
import { IPeriod } from '../datatypes';

export interface IPractitionerRoleNotAvailable extends IBackboneElement {
  description?: string;
  during?: IPeriod;
  _description?: IElement;
}
