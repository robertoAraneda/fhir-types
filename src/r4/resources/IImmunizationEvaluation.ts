import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { ImmunizationEvaluationStatusType } from '../types';

/**
 * @name IImmunizationEvaluation
 * @description Describes a comparison of an immunization event against published recommendations to determine if the administration is \"valid\" in relation to those  recommendations.
 * @see <a href="https://hl7.org/fhir/R4/immunizationevaluation.html">ImmunizationEvaluation</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IImmunizationEvaluation extends IDomainResource {
  /**
   * @description A unique identifier assigned to this immunization evaluation record.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates the current status of the evaluation of the vaccination administration event.
   * @description completed | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-immunization-evaluation-status.html">ImmunizationEvaluationStatus</a>
   */
  status: ImmunizationEvaluationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The individual for whom the evaluation is being done.
   */
  patient: IReference;

  /**
   * @description The date the evaluation of the vaccine administration event was performed.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: IReference;

  /**
   * @description The vaccine preventable disease the dose is being evaluated against.
   */
  targetDisease: ICodeableConcept;

  /**
   * @description The vaccine administration event being evaluated.
   */
  immunizationEvent: IReference;

  /**
   * @description Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  doseStatus: ICodeableConcept;

  /**
   * @description Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   */
  doseStatusReason?: ICodeableConcept[];

  /**
   * @description Additional information about the evaluation.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string;

  /**
   * @description Extensions for series
   */
  _series?: IElement;

  /**
   * @description Nominal position in a series.
   */
  doseNumberPositiveInt?: number;

  /**
   * @description Extensions for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * @description Nominal position in a series.
   */
  doseNumberString?: string;

  /**
   * @description Extensions for doseNumberString
   */
  _doseNumberString?: IElement;

  /**
   * @description The recommended number of doses to achieve immunity.
   */
  seriesDosesPositiveInt?: number;

  /**
   * @description Extensions for seriesDosesPositiveInt
   */
  _seriesDosesPositiveInt?: IElement;

  /**
   * @description The recommended number of doses to achieve immunity.
   */
  seriesDosesString?: string;

  /**
   * @description Extensions for seriesDosesString
   */
  _seriesDosesString?: IElement;
}
