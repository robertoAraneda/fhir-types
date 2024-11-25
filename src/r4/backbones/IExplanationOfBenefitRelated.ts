import { IBackboneElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitRelated
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.related">ExplanationOfBenefitRelated</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitRelated extends IBackboneElement {
  /**
   * @description Reference to a related claim.
   */
  claim?: IReference;

  /**
   * @description A code to convey how the claims are related.
   */
  relationship?: ICodeableConcept;

  /**
   * @description An alternate organizational reference to the case or file to which this particular claim pertains.
   */
  reference?: IIdentifier;
}
