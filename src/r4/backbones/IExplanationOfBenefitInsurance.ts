import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitInsurance
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.insurance">ExplanationOfBenefitInsurance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitInsurance extends IBackboneElement {
  /**
   * @description A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.
   */
  focal?: boolean;

  /**
   * @description Extensions for focal
   */
  _focal?: IElement;

  /**
   * @description Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient\u0027s actual coverage within the insurer\u0027s information system.
   */
  coverage: IReference;

  /**
   * @description Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization.
   */
  preAuthRef?: string;

  /**
   * @description Extensions for preAuthRef
   */
  _preAuthRef?: IElement;
}
