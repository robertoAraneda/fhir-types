import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitDiagnosis
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.diagnosis">ExplanationOfBenefitDiagnosis</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitDiagnosis extends IBackboneElement {
  /**
   * @description A number to uniquely identify diagnosis entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: ICodeableConcept;

  /**
   * @description The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: IReference;

  /**
   * @description When the condition was observed or the relative ranking.
   */
  type?: ICodeableConcept[];

  /**
   * @description Indication of whether the diagnosis was present on admission to a facility.
   */
  onAdmission?: ICodeableConcept;

  /**
   * @description A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.
   */
  packageCode?: ICodeableConcept;
}
