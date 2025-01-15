import { IBackboneElement } from '../base';
import { IAnnotation, ICodeableConcept, IReference } from '../datatypes';
import { ICarePlanDetail } from './ICarePlanDetail';

export interface ICarePlanActivity extends IBackboneElement {
  /**
   * @description Identifies the outcome at the point when the status of the activity is assessed.
   */
  outcomeCodeableConcept?: ICodeableConcept[];

  /**
   * @description Details of the outcome or action resulting from the activity.
   */
  outcomeReference?: IReference[];

  /**
   * @description Notes about the adherence/status/progress of the activity.
   */
  progress?: IAnnotation[];

  /**
   * @description The details of the proposed activity represented in a specific resource.
   */
  reference?: IReference;

  /**
   * @description A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: ICarePlanDetail;
}
