import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name ICoverageEligibilityRequestDiagnosis
 * @description The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityrequest-definitions.html#CoverageEligibilityRequest.item.diagnosis">CoverageEligibilityRequestDiagnosis</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityRequestDiagnosis extends IBackboneElement {
  /**
   * @description The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: ICodeableConcept;

  /**
   * @description The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: IReference;
}
