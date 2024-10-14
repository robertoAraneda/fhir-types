import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name ICoverageEligibilityRequestInsurance
 * @description The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityrequest-definitions.html#CoverageEligibilityRequest.insurance">CoverageEligibilityRequestInsurance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @uthor Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityRequestInsurance extends IBackboneElement {
  /**
   * @description A flag to indicate that this Coverage is to be used for evaluation of this request when set to true.
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
   * @description A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: string;

  /**
   * @description Extensions for businessArrangement
   */
  _businessArrangement?: IElement;
}
