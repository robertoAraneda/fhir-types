import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClaimDiagnosis
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.diagnosis">ClaimDiagnosis</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimDiagnosis extends IBackboneElement {
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
