import { IBackboneElement, IElement } from '../base';
import { IPeriod, IReference } from '../datatypes';
import { ICoverageEligibilityResponseItem } from './ICoverageEligibilityResponseItem';

/**
 * @name ICoverageEligibilityResponseInsurance
 * @description This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityresponse-definitions.html#CoverageEligibilityResponse.insurance">CoverageEligibilityResponseInsurance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityResponseInsurance extends IBackboneElement {
  /**
   * @description Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient\u0027s actual coverage within the insurer\u0027s information system.
   */
  coverage: IReference;

  /**
   * @description Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: boolean;

  /**
   * @description Extensions for inforce
   */
  _inforce?: IElement;

  /**
   * @description The term of the benefits documented in this response.
   */
  benefitPeriod?: IPeriod;

  /**
   * @description Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: ICoverageEligibilityResponseItem[];
}
