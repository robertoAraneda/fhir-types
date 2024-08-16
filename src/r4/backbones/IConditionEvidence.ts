import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

export interface IConditionEvidence extends IBackboneElement {
  /**
   * @description A manifestation or symptom that led to the recording of this condition.
   */
  code?: ICodeableConcept[];

  /**
   * @description Links to other relevant information, including pathology reports.
   */
  detail?: IReference[];
}
