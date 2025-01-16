import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IReference, ISimpleQuantity } from '../datatypes';
import { CarePlanActivityKindType, CarePlanActivityStatusType } from '../types';
import { ITiming } from './ITiming';

/**
 * @name ICarePlanDetail
 * @description Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 * @see <a href="https://hl7.org/fhir/R4/careplan-definitions.html#CarePlan.activity.detail">CarePlanDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */

export interface ICarePlanDetail extends IBackboneElement {
  /**
   * @description A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   * @description Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
   * @see <a href="https://hl7.org/fhir/R4/valueset-care-plan-activity-kind.html">CarePlanActivityDetail</a>
   */
  kind?: CarePlanActivityKindType;

  /**
   * @description Extensions for kind
   */
  _kind?: IElement;

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[];

  /**
   * @description Extensions for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
   */
  code?: ICodeableConcept;

  /**
   * @description Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
   */
  reasonReference?: IReference[];

  /**
   * @description Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: IReference[];

  /**
   * @description Identifies what progress is being made for the specific activity.
   */
  status: CarePlanActivityStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Provides reason why the activity isn\u0027t yet started, is on hold, was cancelled, etc.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: ITiming;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: IPeriod;

  /**
   * @description "The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string;

  /**
   * @description Extensions for scheduledString
   */
  _scheduledString?: IElement;

  /**
   * @description Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   */
  location?: IReference;

  /**
   * @description Identifies who\u0027s expected to be involved in the activity.
   */
  performer?: IReference[];

  /**
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: IReference;

  /**
   * @description Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: ISimpleQuantity;

  /**
   * @description Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;
}
