import { IBackboneElement } from '../base';
import { IAnnotation, ICodeableConcept, IReference } from '../datatypes';
import { ICarePlanDetail } from './ICarePlanDetail';

/**
 * @name ICarePlanActivity
 * @description Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 * @see <a href="https://hl7.org/fhir/R4/careplan-definitions.html#CarePlan.activity">CarePlanActivity</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */

export interface ICarePlanActivity extends IBackboneElement {
  /**
   * @description Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
   */
  outcomeCodeableConcept?: ICodeableConcept[];

  /**
   * @description Details of the outcome or action resulting from the activity.  The reference to an \"event\" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
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
   * @description A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\u0027t know about specific resources such as procedure etc.
   */
  detail?: ICarePlanDetail;
}
