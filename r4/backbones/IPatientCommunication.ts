import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

export interface IPatientCommunication extends IBackboneElement {
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;
}
