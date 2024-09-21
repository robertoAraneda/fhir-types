import { IRiskAssessmentPrediction } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { ObservationStatusType } from '../types';

/**
 * @name IRiskAssessment
 * @description An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 * @see <a href="https://hl7.org/fhir/R4/riskassessment.html">RiskAssessment</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IRiskAssessment extends IDomainResource {
  /**
   * @description Business identifier assigned to the risk assessment.
   */
  identifier?: IIdentifier[];

  /**
   * @description A reference to the request that is fulfilled by this risk assessment.
   */
  basedOn?: IReference;

  /**
   * @description A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  parent?: IReference;

  /**
   * @description The status of the RiskAssessment, using the same statuses as an Observation.
   * @description registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-observation-status.html">ObservationStatus</a>
   */
  status: ObservationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The algorithm, process or mechanism used to evaluate the risk.
   */
  method?: ICodeableConcept;

  /**
   * @description The type of the risk assessment performed.
   */
  code?: ICodeableConcept;

  /**
   * @description The patient or group the risk assessment applies to.
   */
  subject: IReference;

  /**
   * @description The encounter where the assessment was performed.
   */
  encounter?: IReference;

  /**
   * @description The date (and possibly time) the risk assessment was performed.
   */
  ocurredDateTime?: string;

  /**
   * @description Extensions for ocurredDateTime
   */
  _ocurredDateTime?: IElement;

  /**
   * @description The date (and possibly time) the risk assessment was performed.
   */
  ocurredPeriod?: IPeriod;

  /**
   * @description For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  condition?: IReference;

  /**
   * @description The provider or software application that performed the assessment.
   */
  performer?: IReference;

  /**
   * @description The reason the risk assessment was performed.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description The reason the risk assessment was performed.
   */
  reasonReference?: IReference[];

  /**
   * @description Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  basis?: IReference[];

  /**
   * @description Describes the expected outcome for the subject.
   */
  prediction?: IRiskAssessmentPrediction[];

  /**
   * @description A description of the steps that might be taken to reduce the identified risk(s).
   */
  mitigation?: string;

  /**
   * @description Extensions for mitigation
   */
  _mitigation?: IElement;

  /**
   * @description Additional comments about the risk assessment.
   */
  note?: IAnnotation[];
}
